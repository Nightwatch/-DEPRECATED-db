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
let GiveawayEntry = class GiveawayEntry {
    constructor() {
        this.timestamp = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GiveawayEntry.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], GiveawayEntry.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.ManyToOne(type => __1.User),
    __metadata("design:type", __1.User)
], GiveawayEntry.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => _1.Giveaway, giveaway => giveaway.entries),
    __metadata("design:type", _1.Giveaway)
], GiveawayEntry.prototype, "giveaway", void 0);
GiveawayEntry = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], GiveawayEntry);
exports.GiveawayEntry = GiveawayEntry;
//# sourceMappingURL=GiveawayEntry.js.map