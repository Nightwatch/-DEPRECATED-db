import { GiveawayEntry, GiveawayItem } from '.';
import { Guild, User } from '..';
export declare class Giveaway {
    id: number;
    dateEnd: Date;
    dateStart: Date;
    active: boolean;
    dateCreated: Date;
    owner: User;
    guild: Guild | null;
    items: GiveawayItem[];
    entries: GiveawayEntry[];
    constructor();
}
