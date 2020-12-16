import * as faker from 'faker';
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = '';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name  ? this.name : 'N/A'}`;
    }
}

export class Makis extends User {
    constructor(public name: string, public location: { lat: number, lng: number }) {
        super();
    }
}
