import { UserSettings, UserVerification, UserLevel } from '.';
export declare class User {
    id: string;
    name: string;
    avatarUrl: string;
    dateCreated: Date;
    banned: boolean;
    dateLastMessage: Date;
    settings: UserSettings;
    verification: UserVerification;
    level: UserLevel;
    constructor(user?: User);
}
