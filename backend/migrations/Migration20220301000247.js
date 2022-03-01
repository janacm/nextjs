"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220301000247 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220301000247 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "patient" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null);');
        this.addSql('alter table "patient" add constraint "patient_pkey" primary key ("id");');
    }
}
exports.Migration20220301000247 = Migration20220301000247;
