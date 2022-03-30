import {Entity, JsonType, Property} from "@mikro-orm/core";
import {CustomBaseEntity} from "./CustomBaseEntity";

@Entity()
export class Patient extends CustomBaseEntity{
    @Property()
    firstName!: string;

    @Property()
    lastName!: string;

    @Property({type: JsonType, nullable: true})
    gender?: { birthGender: string, identifyingGender: string };

    constructor(firstName: string, lastName: string, jsonVal: any) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = jsonVal;
    }
}