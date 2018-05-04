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
const _1 = require(".");
const typeorm_1 = require("typeorm");
let GiveawayItemKey = class GiveawayItemKey {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GiveawayItemKey.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], GiveawayItemKey.prototype, "key", void 0);
__decorate([
    typeorm_1.Index({ unique: true }),
    typeorm_1.OneToOne(type => _1.GiveawayItem, item => item.key),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.GiveawayItem)
], GiveawayItemKey.prototype, "giveawayItem", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.Giveaway),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.Giveaway)
], GiveawayItemKey.prototype, "giveaway", void 0);
GiveawayItemKey = __decorate([
    typeorm_1.Entity()
], GiveawayItemKey);
exports.GiveawayItemKey = GiveawayItemKey;
//# sourceMappingURL=GiveawayItemKey.js.map