import { UserSettings, UserVerification, UserLevel, UserBalance, UserProfile } from '.';
export declare class User {
    id: string;
    name: string;
    avatarUrl: string;
    dateCreated: Date;
    banned: boolean;
    dateLastMessage: Date | null;
    settings: UserSettings;
    verification: UserVerification;
    level: UserLevel;
    balance: UserBalance;
    profile: UserProfile;
    constructor(user?: User);
}
