import { Migration } from '@mikro-orm/migrations';

export class Migration20220304154701 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "patient" add column "janac_son" jsonb null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "patient" drop column "janac_son";');
  }

}
