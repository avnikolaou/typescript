import * as faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}

export class Makis extends User {
    constructor(public location: { lat: number, lng: number }) {
        super();
    }
}
