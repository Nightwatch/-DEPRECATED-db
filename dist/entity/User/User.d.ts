import { UserSettings, UserVerification, UserLevel, UserBalance } from '.';
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
    balance: UserBalance;
    constructor(user?: User);
}
