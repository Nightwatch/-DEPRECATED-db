import { GuildSettings, GuildSuggestion, GuildSupportTicket } from '.';
export declare class Guild {
    id: string;
    name: string;
    dateCreated: Date;
    settings: GuildSettings;
    suggestions: GuildSuggestion[];
    supportTickets: GuildSupportTicket[];
    constructor(guild?: Guild);
}
