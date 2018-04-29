import { GuildSettings, GuildSuggestion } from '.';
export declare class Guild {
    id: string;
    name: string;
    dateCreated: Date;
    settings: GuildSettings;
    suggestions: GuildSuggestion[];
    constructor(guild?: Guild);
}
