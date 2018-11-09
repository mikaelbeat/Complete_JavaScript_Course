var questionBank = [];

var question = function(answer1, answer2, correctAnswer, tittle){
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.correctAnswer = correctAnswer;
    this.tittle = tittle;
}

var question1 = new question('Yes', 'No', 'Yes', 'Is coding fun?');


questionBank.push(question1);
// console.log(questionBank[0]);
console.log(questionBank[0]);


/*

// Function constructor

var John = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'Designer');

var mark = new Person('Mark', 1948, 'Retired');

jane.calculateAge();

mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);




/*

// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function(style, timeOfDay){
        if (style === 'Formal'){
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' +
                                                this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style == 'Friendly'){
            console.log('Hey, what\'s up?. I\'m ' + this.name + ', I\'m a ' +
            this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'Designer'
};


john.presentation('Formal','Morning')
john.presentation.call(emily, 'Friendly', 'Afternoon');

var johnFriedly = john.presentation.bind(john, 'Friendly');
johnFriedly('Morning');
johnFriedly('Night');

var emilyFormal = john.presentation.bind(emily, 'Formal');
emilyFormal('Afternoon');



// Closures

function retirement(retirementAge){
    var a = ' years left until retirement.';
        return function(yearOfBirth){
            var age = 2016 -yearOfBirth;
            console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1990);

console.log('*********************************');

function interviewQuestion(job){
    return function(name){
        if (job == 'Designer'){
            console.log(name + ', can you please explaon what UX design is?');
        } else if (job === 'Teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('Teacher')('John');



// IIFE

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();


(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);



// Functions returning functions

function interviewQuestion(job){
    if (job === 'Designer'){
        return function(name){
            console.log(name + ', can you please explaon what UX design is?');
        }
    } else if (job === 'Teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('Teacher');
var designerQuestion = interviewQuestion('Designer');
var otherQuestion = interviewQuestion();

teacherQuestion('John');
designerQuestion('Paul');
otherQuestion('Megan');

interviewQuestion('Teacher')('Jane');
interviewQuestion('Designer')('Julia');
interviewQuestion('')('Logan');


// Inner finctions

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.lenght; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(rl){

    if (el >= 18 && el <= 81){
        return Math.round((206.9 * 0.67 * el));
    }else{
        -1;
    }

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;
console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


// Object.create

var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name= 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: { value: 1969},
        job: { value: 'Designer'}
    });


// Function constructor

var John = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    }

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'Designer');

var mark = new Person('Mark', 1948, 'Retired');

jane.calculateAge();

mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/