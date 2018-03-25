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
const class_validator_1 = require("class-validator");
const __1 = require("..");
let Referral = class Referral {
    constructor() {
        this.dateCreated = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Referral.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.IsFQDN(),
    __metadata("design:type", String)
], Referral.prototype, "inviteUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date
    /**
     * The role that is given to each user that joins via the referral link.
     *
     * @type {ReferralRole}
     * @memberof Referral
     */
    )
], Referral.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.OneToOne(type => __1.ReferralRole, referralRole => referralRole.referral, {
        cascadeInsert: true,
        cascadeRemove: true
    }),
    __metadata("design:type", __1.ReferralRole
    /**
     * User that created the referral. They will be known as the referral owner.
     *
     * @type {User}
     * @memberof Referral
     */
    )
], Referral.prototype, "referralRole", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.User),
    __metadata("design:type", __1.User
    /**
     * The Guild the referral belongs to.
     *
     * @type {Guild}
     * @memberof Referral
     */
    )
], Referral.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.Guild),
    __metadata("design:type", __1.Guild)
], Referral.prototype, "guild", void 0);
__decorate([
    typeorm_1.OneToMany(type => __1.ReferralUnlockedReward, unlockedReward => unlockedReward.referral, {
        cascadeInsert: true
    }),
    __metadata("design:type", Array)
], Referral.prototype, "unlockedRewards", void 0);
Referral = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], Referral);
exports.Referral = Referral;
//# sourceMappingURL=Referral.js.map