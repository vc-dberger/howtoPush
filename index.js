// This is my first JavaScript code!
console.log('Programming with Mosh - 2020');
console.log('Hello World');
console.log('Now with separated JS code!');
console.log('');
console.log('lecture with node');
console.log('');
console.log('Variables');
let name = 'Mosh';
console.log(name);

// Variables cannot be a reserved name
// Variables should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Variables should be written in camelCase (firstName)
// Are case sensitive

firstName = 'Mosh';
let lastName = 'Houdami';

console.log('');
console.log('New chapter');
interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// console.log('');
// console.log('let and const');
// const variables cannot be reassigned
// const newInterestRate = 0.3;
// newInterestRate = 1;
// console.log(newInterestRate);

console.log('');
console.log('Primitive types');
console.log('Find infos about primitives in notes (14.10.20 )')
name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal (true or false)
firstName = undefined;
let selectedColor = null;

console.log('');
console.log('Dynamic typing');

console.log('');
console.log('Objects');
// Objects are subjects of the class 'Reference types'
let person = {
    name: 'Mosh',
    age: 30
};

// Dot Notation
person.name = 'John';
// Bracket Notation
person['name'] = 'Mary';
// Dot Notation is shorter and thus should be the default choice
console.log(person.name);

console.log('');
console.log('Arrays');

let selectedColors = ['red','blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors)
selectedColors[4] = 1;
console.log(selectedColors,selectedColors.length);

console.log('');
console.log('Functions');
function helloWorld() {
    console.log('Hello World!');
}
helloWorld();
// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');

// Calculating a value
function square(number) {
    return Math.pow(number, 2);
    // return number * number // also possible
}
console.log(square(8));
