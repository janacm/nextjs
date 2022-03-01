import { Migration } from '@mikro-orm/migrations';

export class Migration20220301000247 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "patient" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null);');
    this.addSql('alter table "patient" add constraint "patient_pkey" primary key ("id");');
  }

}
