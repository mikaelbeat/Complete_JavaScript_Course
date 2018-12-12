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

*/

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