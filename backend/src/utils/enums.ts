import { ContentType, Platform, WeekDay } from '../generated/prisma/enums';

export const dayToEnum = (day: string): WeekDay => {
    const mapping: Record<string, WeekDay> = {
        Monday: 'MONDAY',
        Tuesday: 'TUESDAY',
        Wednesday: 'WEDNESDAY',
        Thursday: 'THURSDAY',
        Friday: 'FRIDAY',
        Saturday: 'SATURDAY',
        Sunday: 'SUNDAY',
    };
    return mapping[day] || 'MONDAY';
};

export const platformToEnum = (platform: string): Platform => {
    const mapping: Record<string, Platform> = {
        Twitter: 'TWITTER',
        Instagram: 'INSTAGRAM',
        LinkedIn: 'LINKEDIN',
        TikTok: 'TIKTOK',
        YouTube: 'YOUTUBE',
    };
    return mapping[platform] || 'INSTAGRAM';
};

export const contentTypeToEnum = (type: string): ContentType => {
    const mapping: Record<string, ContentType> = {
        Video: 'VIDEO',
        Image: 'IMAGE',
        Text: 'TEXT',
        Thread: 'THREAD',
        Reel: 'REEL',
        Post: 'IMAGE',
        Story: 'IMAGE',
    };
    return mapping[type] || 'IMAGE';
};
