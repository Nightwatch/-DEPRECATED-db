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
let ReferralRole = class ReferralRole {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ReferralRole.prototype, "id", void 0);
__decorate([
    typeorm_1.Index({ unique: true }),
    typeorm_1.OneToOne(type => __1.Referral, referral => referral.referralRole),
    typeorm_1.JoinColumn(),
    __metadata("design:type", __1.Referral)
], ReferralRole.prototype, "referral", void 0);
__decorate([
    typeorm_1.Index({ unique: true }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], ReferralRole.prototype, "roleId", void 0);
ReferralRole = __decorate([
    typeorm_1.Entity()
], ReferralRole);
exports.ReferralRole = ReferralRole;
//# sourceMappingURL=ReferralRole.js.map