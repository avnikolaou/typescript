let apples: number = 5;

// apples = 'eleos'; can't do that!

let speed: string = 'fast';
let hasName: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNymbers: number[] = [1, 2, 3];
let bools: boolean[] = [true, false, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function taht returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordnates: { x: number; y: number } = JSON.parse(json);
console.log(coordnates);

// 2) When we declare on a variable in one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // let foundWord = false;

for (let i = 0; i <words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) When a variable has a type that can't be inferred correctly;
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

