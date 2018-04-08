import { GuildSettings, GuildRole } from '.';
export declare class Guild {
    id: string;
    name: string;
    dateCreated: Date;
    settings: GuildSettings;
    roles: GuildRole[];
    constructor(guild?: Guild);
}
