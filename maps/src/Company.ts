import * as faker from 'faker';

export class Company {
    companyName: string
    catchPhrase: string
    location : {
        lat: number,
        lng: number
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return (
            `<div>
                <h1>${this.companyName ? this.companyName : 'N/A'}</h1>
                <h3>${this.catchPhrase ? this.catchPhrase : 'N/A'}</h3>
            </div>`
        );
    }
}

export class OrderEze extends Company {
    constructor(public companyName: string, public catchPhrase:string, public location: { lat: number, lng: number }) {
        super();
    }
}
