import { Migration } from '@mikro-orm/migrations';

export class Migration20220304170338 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "patient" rename column "janac_son" to "gender";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "patient" rename column "gender" to "janac_son";');
  }

}
