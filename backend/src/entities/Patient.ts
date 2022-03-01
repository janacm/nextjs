import {Entity, Property} from "@mikro-orm/core";
import {CustomBaseEntity} from "./CustomBaseEntity";

@Entity()
export class Patient extends CustomBaseEntity{
    @Property()
    firstName!: string;

    @Property()
    lastName!: string;

    constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

}