/*
// Lecture: Let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Smith';
console.log(name6);



// ES5
function driversLicence(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive car.');
    } else {
        console.log(firstName + ', born in ' + yearOfBirth + ' failed the test.');
    }
}
driversLicence(true);

// ES6
function driversLicence6(passedTest) {

    let firstName;

    if (passedTest){
        firstName = 'John';
        const yearOfBirth = 1990;
        console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive car.');
    }
}



// Lecture: Blocks and IIFEs

// const and let defined variables are visible only in the block where they are defined.
{
    const a = 'First';
    let b = 'Second';
}

console.log(a + ' ' + b);



// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2016 - year;
}

// ES5
console.log('Name is ' + firstName + ', and last name is ' + lastName + ' is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`Name is ${firstName}, and last name is ${lastName} is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));

*/

// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];


// ES5
var ages5 = years.map(function(element){
    return 2018 - element;
});
console.log(ages5);

// ES6
let ages6 = years.map(element => 2018 - element);
console.log(ages6);

ages6 = years.map((element, index) => `Age element ${index + 1}: ${2018 - element}.`);
console.log(ages6);

ages6 = years.map((element, index) => {
    const now = new Date().getFullYear();
    const age = now - element;
    return `Age element ${index + 1}: ${age}.`
})

console.log(ages6);