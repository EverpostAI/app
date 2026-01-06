import 'dotenv/config';

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY in .env");
}
export const config: {
    port: number;
    frontendUrl: any;
    openaiKey: string;
    databaseUrl: string;
    nodeEnv: string;
    jwtSecret: string;
} = {
    port: parseInt(process.env.PORT || "4000"),
    frontendUrl: process.env.FRONTEND_URL,
    openaiKey: process.env.OPENAI_API_KEY,
    databaseUrl: process.env.DATABASE_URL!,
    nodeEnv: process.env.NODE_ENV!,
    jwtSecret: process.env.JWT_SECRET!
};
