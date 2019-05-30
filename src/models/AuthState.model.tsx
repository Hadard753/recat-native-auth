import { UserProfile } from "../shared/models";

export interface AuthState {
    email: string;
    password: string;
    error: string;
    loading: boolean;
    user: UserProfile | undefined;
}