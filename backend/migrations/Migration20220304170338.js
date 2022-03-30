"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220304170338 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220304170338 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "patient" rename column "janac_son" to "gender";');
    }
    async down() {
        this.addSql('alter table "patient" rename column "gender" to "janac_son";');
    }
}
exports.Migration20220304170338 = Migration20220304170338;
