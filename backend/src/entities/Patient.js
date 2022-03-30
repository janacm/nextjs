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
exports.Patient = void 0;
const core_1 = require("@mikro-orm/core");
const CustomBaseEntity_1 = require("./CustomBaseEntity");
let Patient = class Patient extends CustomBaseEntity_1.CustomBaseEntity {
    constructor(firstName, lastName, jsonVal) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = jsonVal;
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Patient.prototype, "firstName", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Patient.prototype, "lastName", void 0);
__decorate([
    (0, core_1.Property)({ type: core_1.JsonType, nullable: true }),
    __metadata("design:type", Object)
], Patient.prototype, "gender", void 0);
Patient = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Object])
], Patient);
exports.Patient = Patient;
