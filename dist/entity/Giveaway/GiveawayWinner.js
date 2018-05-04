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
const __1 = require("..");
class GiveawayWinner {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GiveawayWinner.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.User),
    __metadata("design:type", __1.User)
], GiveawayWinner.prototype, "user", void 0);
__decorate([
    typeorm_1.Index({ unique: true }),
    typeorm_1.OneToOne(type => __1.Giveaway),
    typeorm_1.JoinColumn(),
    __metadata("design:type", __1.Giveaway)
], GiveawayWinner.prototype, "giveaway", void 0);
exports.GiveawayWinner = GiveawayWinner;
//# sourceMappingURL=GiveawayWinner.js.map