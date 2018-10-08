
var johnHeight, johnMass;
johnHeight = 1.60;
johnMass = 80;
johnBMI = (johnMass / (johnHeight * johnHeight));
console.log('John BMI is ' + johnBMI);

var markHeight, markMass;
markHeight = 1.90;
markMass = 55;
markBMI = (markMass / (markHeight * markHeight));
console.log('Mark BMI is ' + markBMI);

var compareBMI = johnBMI <= markBMI;

if(compareBMI == true){
	console.log('Mark\'s BMI is higher.');
}else{
	console.log('John\'s BMI is higher.');
}


/*
var firstName = 'John';
var age = 28;

console.log('Name: ' + firstName + ', age: ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log('Name: ' + firstName + 
			', age: ' + age +
			', job: ' + job +
			', married: ' + isMarried);


age = 'twenty eight';
job = 'driver';
	
	alert('Name: ' + firstName + 
			', age: ' + age +
			', job: ' + job +
			', married: ' + isMarried);
	
var lastName = prompt('What is his last name?');
console.log('Entered ' + lastName + ' for last name');

var firstName = prompt('What is his first name?')
console.log('Entered ' + firstName + ' for first name.')

console.log('Full name is ' + firstName + ' ' + lastName);

var year, yearJohn, yearMark;
year = 2018
ageJohn = 28;
ageMark = 33;

yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);
console.log(year + 2);

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
console.log(typeof johnOlder);


var now = 2018;
var yearJohn = 1981;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ageJohn + ageMark / 2;
console.log(average);
*/