class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beeeep');
    }
}

class Car extends Vehicle {
    constructor(public whels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.drive(); ERROR!!!
// vehicle.honk(); ERROR!!!

console.log('Car: ')
const car = new Car(4, 'blue');
car.startDrivingProcess();
// car.honk(); ERROR!!!
