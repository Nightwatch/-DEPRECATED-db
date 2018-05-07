import { Guild } from '.';
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
    userId: string;
    closedUserId: string;
    closedReason: string | null;
    guild: Guild;
}
