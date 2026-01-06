export interface AuthResponse {
    success: boolean;
    token?: string;
    user?: {
        id: string;
        email: string;
        profession: string;
        needsPassword: boolean;
        needsGoogleLink: boolean;
    };
    error?: string;
}
