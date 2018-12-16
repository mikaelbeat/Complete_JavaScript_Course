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


// Lecture: Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',
            function(){
                var str = 'This is box number ' + self.position + ' and it is ' + self.color;
                alert(str);
            });
    }
}
box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',
            () => {
                var str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
            });
    }
}
box6.clickMe();

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 =
    function(friends){
        var arr = friends.map(function(element){
            return this.name + ' is friends with ' + element;
        }.bind(this));
        console.log(arr);
    }
    var friends = ['Bob', 'Jane', 'Mark'];
    new Person('John').myFriends5(friends);

console.log('********************');

// ES6
Person.prototype.myFriends6 =
    function(friends){
        var arr = friends.map(element =>
            `${this.name} is friends with ${element}`);
        console.log(arr);
    }
    new Person('Mike').myFriends6(friends);


// Lecture: Destructuring


// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];


// ES6
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

console.log('********************');

function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1981);
console.log(age);
console.log(retirement);



// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur =>
    cur.style.backgroundColor = 'dodgerblue');



// ES5
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue';
}

*/

// ES6
for(const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

console.log('*********************');

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));