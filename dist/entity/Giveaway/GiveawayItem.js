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
const class_validator_1 = require("class-validator");
const GiveawayItemKey_1 = require("./GiveawayItemKey");
let GiveawayItem = class GiveawayItem {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GiveawayItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GiveawayItem.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.IsFQDN(),
    __metadata("design:type", String)
], GiveawayItem.prototype, "url", void 0);
__decorate([
    typeorm_1.OneToOne(type => GiveawayItemKey_1.GiveawayItemKey, key => key.giveawayItem, {
        cascadeInsert: true,
        cascadeRemove: true
    }),
    __metadata("design:type", GiveawayItemKey_1.GiveawayItemKey)
], GiveawayItem.prototype, "key", void 0);
__decorate([
    typeorm_1.ManyToOne(type => _1.Giveaway),
    __metadata("design:type", _1.Giveaway)
], GiveawayItem.prototype, "giveaway", void 0);
GiveawayItem = __decorate([
    typeorm_1.Entity()
], GiveawayItem);
exports.GiveawayItem = GiveawayItem;
//# sourceMappingURL=GiveawayItem.js.map