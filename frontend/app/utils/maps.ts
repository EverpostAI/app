import { ContentItem } from "../context/UserContentContext";

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    completed?: boolean;
    contentType?: string;
    hook?: string;
    platform?: string;
}

export function getDateForDayThisWeek(day: string, weekStartMonday: Date): Date {
    const dayMap: Record<string, number> = {
        MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2, THURSDAY: 3,
        FRIDAY: 4, SATURDAY: 5, SUNDAY: 6
    };

    const offset = dayMap[day.toUpperCase()];
    if (offset === undefined) throw new Error(`Invalid day: ${day}`);

    // Normalize to midnight local time first
    const baseMonday = new Date(weekStartMonday);
    baseMonday.setHours(0, 0, 0, 0);

    // Calculate correct date - Monday is 0, so just add the offset
    const result = new Date(baseMonday);
    result.setDate(baseMonday.getDate() + offset);
    result.setHours(9, 0, 0, 0);

    return result;
}
/** Maps weekly plan into calendar events — now uses proper weekStart */
export const mapWeeklyPlanToEvents = (
    weeklyPlan: ContentItem[],
    weekStartMonday: Date | string = new Date()
): CalendarEvent[] => {
    const monday = new Date(weekStartMonday);

    return weeklyPlan.map((item, idx) => {

        const startDate = item.scheduledFor
            ? new Date(item.scheduledFor)
            : getDateForDayThisWeek(item.day, monday);
        const endDate = new Date(startDate);
        endDate.setHours(startDate.getHours() + 1);

        return {
            id: `weekly-${item.id}-${startDate.getTime()}`,
            title: item.idea,
            start: startDate,
            end: endDate,
            allDay: !item.scheduledFor,
            completed: item.completed || false,
            contentType: item.contentType,
            hook: item.hook,
            platform: item.platform,
        };
    });
};

/** Maps past content history into calendar events */
export const mapContentHistoryToEvents = (contentHistory: string[]): CalendarEvent[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return contentHistory.map((theme, idx) => {
        const daysBack = contentHistory.length - 1 - idx;
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - daysBack);


        return {
            id: `history-${idx}-${startDate.getTime()}`,
            title: theme,
            start: startDate,
            end: startDate,
            allDay: true,
            completed: true,
        };
    });
};
/** Combines history + weekly plan events without duplicates */
export const mapAllEvents = (
    weeklyPlan: ContentItem[],
    contentHistory: string[],
    weekStartMonday?: Date | string
): CalendarEvent[] => {
    const weeklyEvents = mapWeeklyPlanToEvents(weeklyPlan, weekStartMonday);

    // Only create history events for posts that DON'T exist in the current weekly plan
    const weeklyTitles = new Set(weeklyPlan.map(item => item.idea));
    const uniqueHistory = contentHistory.filter(title => !weeklyTitles.has(title));
    const historyEvents = mapContentHistoryToEvents(uniqueHistory);

    return [...historyEvents, ...weeklyEvents];
};