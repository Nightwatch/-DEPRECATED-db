import { User } from '.';
import { Referral } from '..';
export declare class UserReferral {
    id: number;
    dateUsed: Date;
    user: User;
    referral: Referral;
    constructor();
}
