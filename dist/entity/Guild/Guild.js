"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _1 = require(".");
let Guild = class Guild {
    constructor(guild) {
        if (guild) {
            Object.assign(this, guild);
        }
        this.dateCreated = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Guild.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Guild.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Guild.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.GuildSettings, guildSettings => guildSettings.guild, {
        cascadeRemove: true,
        cascadeInsert: true
    }),
    __metadata("design:type", _1.GuildSettings)
], Guild.prototype, "settings", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.GuildSuggestion, guildSuggestion => guildSuggestion.guild),
    __metadata("design:type", Array)
], Guild.prototype, "suggestions", void 0);
Guild = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Guild])
], Guild);
exports.Guild = Guild;
//# sourceMappingURL=Guild.js.map