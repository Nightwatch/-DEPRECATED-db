import { User } from '.';
export declare class UserVerification {
    id: number;
    verified: boolean;
    verificationToken: string;
    user: User;
    constructor();
}
