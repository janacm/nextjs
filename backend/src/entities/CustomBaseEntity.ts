import { v4 as uuid } from 'uuid';
import {PrimaryKey, Property} from "@mikro-orm/core";

export abstract class CustomBaseEntity {

    @PrimaryKey()
    id = uuid();

    @Property()
    createdAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

}