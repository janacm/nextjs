import { CustomBaseEntity } from "./CustomBaseEntity";
export declare class Patient extends CustomBaseEntity {
    firstName: string;
    lastName: string;
    gender?: {
        birthGender: string;
        identifyingGender: string;
    };
    constructor(firstName: string, lastName: string, jsonVal: any);
}
