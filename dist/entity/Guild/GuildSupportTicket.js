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
let GuildSupportTicket = class GuildSupportTicket {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GuildSupportTicket.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "messageId", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "status", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', { nullable: true }),
    __metadata("design:type", Object)
], GuildSupportTicket.prototype, "dateClosed", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], GuildSupportTicket.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "color", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GuildSupportTicket.prototype, "closedUserId", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", Object)
], GuildSupportTicket.prototype, "closedReason", void 0);
__decorate([
    typeorm_1.ManyToOne(type => _1.Guild, guild => guild.suggestions),
    __metadata("design:type", _1.Guild)
], GuildSupportTicket.prototype, "guild", void 0);
GuildSupportTicket = __decorate([
    typeorm_1.Entity()
], GuildSupportTicket);
exports.GuildSupportTicket = GuildSupportTicket;
//# sourceMappingURL=GuildSupportTicket.js.map