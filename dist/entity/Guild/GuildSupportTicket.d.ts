import { Guild } from '.';
import { User } from '..';
export declare class GuildSupportTicket {
    id: number;
    messageId: string;
    type: string;
    description: string;
    status: string;
    dateClosed: Date | null;
    dateCreated: Date;
    color: string;
    title: string;
    closedReason: string | null;
    user: User;
    closedUser: User;
    guild: Guild;
}
