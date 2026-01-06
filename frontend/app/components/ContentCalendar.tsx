import { useState, useMemo } from "react";
import { Calendar, View } from "react-big-calendar";
import { localizer } from "../utils/calendarSetup";
import { useUserContent } from "../context/UserContentContext";
import { mapAllEvents } from "../utils/maps";
import { X, Calendar as CalendarIcon, Hash, Zap, CheckCircle2, Clock } from "lucide-react";

export const ContentCalendar = () => {
    const { weeklyPlan, contentHistory, weekStartMonday } = useUserContent();
    // ✅ Memoize events to prevent duplicates in Strict Mode
    const events = useMemo(() => {
        // Pass the real Monday of the active plan!
        return mapAllEvents(weeklyPlan, contentHistory, weekStartMonday || undefined);
    }, [weeklyPlan, contentHistory, weekStartMonday]);
    const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
    const [view, setView] = useState<View>('week'); // Default to week view
    const [date, setDate] = useState(new Date());

    // Custom event style
    const eventStyleGetter = (event: any) => {
        const style: React.CSSProperties = {
            backgroundColor: event.completed ? '#10b981' : '#ff4444',
            borderRadius: '6px',
            opacity: event.completed ? 0.8 : 1,
            color: 'white',
            border: 'none',
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: '500',
        };
        return { style };
    };

    return (
        <>
            {/* Calendar Container */}
            <div className="card">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <CalendarIcon className="w-6 h-6 text-accent" strokeWidth={2.5} />
                        <h2 className="text-2xl font-bold text-ink">Calendar View</h2>
                    </div>
                    {/* Legend */}
                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-accent"></div>
                            <span className="text-muted">Pending</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-muted">Completed</span>
                        </div>
                    </div>
                </div>
                <div style={{ height: 600 }}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        views={['month', 'week', 'day']}
                        view={view}
                        date={date}
                        onView={(newView) => setView(newView)}
                        onNavigate={(newDate) => setDate(newDate)}
                        style={{ height: "100%" }}
                        onSelectEvent={(event) => setSelectedEvent(event)}
                        eventPropGetter={eventStyleGetter}
                    />
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedEvent && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-[9998]"
                        onClick={() => setSelectedEvent(null)}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
                        <div className="card-flat border-2 border-border max-w-lg w-full shadow-2xl relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-paper transition-colors"
                            >
                                <X className="w-5 h-5 text-muted hover:text-ink" strokeWidth={2.5} />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-start gap-3 mb-2">
                                    <h2 className="text-2xl font-bold text-ink flex-1 pr-8">
                                        {selectedEvent.title}
                                    </h2>
                                    {selectedEvent.completed && (
                                        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} />
                                            <span>Completed</span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-muted">
                                        <CalendarIcon className="w-4 h-4" strokeWidth={2.5} />
                                        <span className="text-sm font-medium">
                                            {selectedEvent.start.toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    {!selectedEvent.allDay && (
                                        <div className="flex items-center gap-2 text-muted">
                                            <Clock className="w-4 h-4" strokeWidth={2.5} />
                                            <span className="text-sm font-medium">
                                                {selectedEvent.start.toLocaleTimeString('en-US', {
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: true
                                                })}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="space-y-4">
                                {selectedEvent.contentType && (
                                    <div className="bg-paper border border-border rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Hash className="w-4 h-4 text-accent" strokeWidth={2.5} />
                                            <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                                                Content Type
                                            </span>
                                        </div>
                                        <p className="text-ink font-medium">{selectedEvent.contentType}</p>
                                    </div>
                                )}
                                {selectedEvent.hook && (
                                    <div className="bg-paper border border-border rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Zap className="w-4 h-4 text-accent" strokeWidth={2.5} />
                                            <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                                                Hook
                                            </span>
                                        </div>
                                        <p className="text-ink">{selectedEvent.hook}</p>
                                    </div>
                                )}
                                {selectedEvent.platform && (
                                    <div className="bg-paper border border-border rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                                                Platform
                                            </span>
                                        </div>
                                        <p className="text-ink font-medium">{selectedEvent.platform}</p>
                                    </div>
                                )}
                            </div>

                            {/* Close Button */}
                            <div className="mt-6 pt-6 border-t-2 border-border">
                                <button
                                    className="btn-main w-full"
                                    onClick={() => setSelectedEvent(null)}
                                >
                                    Got It
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
