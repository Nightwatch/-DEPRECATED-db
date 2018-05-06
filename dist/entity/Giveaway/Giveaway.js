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
const __1 = require("..");
let Giveaway = class Giveaway {
    constructor() {
        this.guild = null;
        this.dateCreated = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Giveaway.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Giveaway.prototype, "dateEnd", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Giveaway.prototype, "dateStart", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Giveaway.prototype, "active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Giveaway.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.User),
    __metadata("design:type", __1.User)
], Giveaway.prototype, "owner", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.Guild),
    __metadata("design:type", Object)
], Giveaway.prototype, "guild", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.GiveawayItem, item => item.giveaway, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Giveaway.prototype, "items", void 0);
__decorate([
    typeorm_1.OneToMany(type => _1.GiveawayEntry, entry => entry.giveaway),
    __metadata("design:type", Array)
], Giveaway.prototype, "entries", void 0);
Giveaway = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], Giveaway);
exports.Giveaway = Giveaway;
//# sourceMappingURL=Giveaway.js.map