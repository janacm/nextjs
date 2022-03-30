"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220304154701 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220304154701 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "patient" add column "janac_son" jsonb null;');
    }
    async down() {
        this.addSql('alter table "patient" drop column "janac_son";');
    }
}
exports.Migration20220304154701 = Migration20220304154701;
