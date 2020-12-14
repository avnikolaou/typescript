const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const cola: [string, boolean, number] = ['dark', true, 160];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
// pepsi[0] = 40; ERROR!!!
