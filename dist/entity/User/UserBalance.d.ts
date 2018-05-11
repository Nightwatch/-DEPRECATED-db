import { User } from '.';
export declare class UserBalance {
    id: number;
    netWorth: number;
    balance: number;
    dateLastClaimedDailies: Date | null;
    user: User;
    constructor();
}
