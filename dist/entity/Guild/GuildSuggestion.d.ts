import { Guild } from '.';
export declare class GuildSuggestion {
    id: number;
    color: string;
    description: string;
    messageId: string;
    userId: string;
    dateCreated: Date;
    likes: number;
    dislikes: number;
    guild: Guild;
}
