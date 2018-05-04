import { Giveaway } from '.';
import { User } from '..';
export declare class GiveawayEntry {
    id: number;
    timestamp: Date;
    user: User;
    giveaway: Giveaway;
    constructor();
}
