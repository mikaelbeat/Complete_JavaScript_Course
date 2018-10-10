
var john = {
		firstName: 'John',
		lastName: 'Smith',
		height: 1.6,
		weight: 100,
		calcBMI: function(){
			this.BMI = this.weight / (this.height * this.height)
		}
};

var mark = {
		firstName: 'Mark',
		lastName: 'Taylor',
		height: 1.6,
		weight: 100,
		calcBMI: function(){
			this.BMI = this.weight / (this.height * this.height)
			return this.BMI;
		}
};

if(john.calcBMI() > mark.calcBMI()){
	console.log('John BMI is ' + john.BMI + 
				' which is bigger than Marks BMI ' + mark.BMI + '.');
}else if(john.BMI  < mark.BMI){
	console.log('Mark BMI is ' + mark.BMI +
				' which is bigger than Johns BMI ' + john.BMI  + '.')
}else{
	console.log('John and Mark has same BMI.');
}





/*
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



var john = {
		firstName: 'John',
		lastName: 'Smith',
		birthYear: 1990,
		family: ['Jane', 'Mark', 'Bob', 'Emily'],
		job: 'Teacher',
		isMarried: false,
		calcAge: function(){
			this.age = 2018 - this.birthYear
		}
};

console.log(john.calcAge());
john.calcAge();
console.log(john);



var john = {
		firstName: 'John',
		lastName: 'Smith',
		birthYear: 1990,
		family: ['Jane', 'Mark', 'Bob', 'Emily'],
		job: 'Teacher',
		isMarried: false
};

console.log(john.job);
console.log(john['lastname']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);




var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

var tips =[];
var billsWithTip = [];

function tipCalculator(bill){
	tipPercentage = 0;
	fullBill = 0;
	tipAmount = 0;
	
	if(bill < 50){
		tipPercentage = 0.2;
	}else if(bill >= 50 && bill <= 200){
		tipPercentage = 0.15;
	}else{
		tipPercentage = 0.1;
	}
	console.log('For bill amount ' + bill + '€ tip percentage is ' + tipPercentage + '%.');
	tipAmount = bill * tipPercentage;
	tips.push(tipAmount);
	fullBill = bill + tipAmount;
	billsWithTip.push(fullBill);
	return tipAmount;
}

var tipAmount = tipCalculator(bill1);
console.log('In the first restaurant where bill was ' + bill1 +
		'€, tip amount is ' + tipAmount + '€.');

var tipAmount = tipCalculator(bill2);
console.log('In the second restaurant where bill was ' + bill2 +
		'€, tip amount is ' + tipAmount + '€.');

var tipAmount = tipCalculator(bill3);
console.log('In the third restaurant where bill was ' + bill3 +
		'€, tip amount is ' + tipAmount + '€.');

console.log('Given tips ' + tips);
console.log('Bills with tips are ' + billsWithTip);



var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names.length);
console.log(years);

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('Blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));

console.log(john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer');

function calculateAge(birthYear){
	return 2018 - birthYear
}

var ageJohn = calculateAge(1981);
console.log(ageJohn);

var whatDoYouDo = function(job, firstName){
	switch (job) {
	case 'teacher':
		return firstName + ' teaches kids how to code.';
	case 'driver':
		return firstName + ' drives a cab in Lisbon.';
	case 'designer':
		return firstName + ' designs web pages.';
	default:
		return firtName + ' does something else.';
	}
}

console.log(whatDoYouDo('driver', 'Ben'));

var johnsTeam, mikesTeam, marysTeam;
var johnsTeamMatch1, johnsTeamMatch2, johnsTeamMatch3, johnsTeamMatches;
var mikesTeamMatch1, mikesTeamMatch2, mikesTeamMatch3, mikesTeamMatches;
var marysTeamMatch1, marysTeamMatch2, marysTeamMatch3, marysTeamMatches;
var johnsTeamAverage, mikesTeamAverage, marysTeamAverage;

johnsTeamMatches = 3;
johnsTeamMatch1 = 11;
johnsTeamMatch2 = 10;
johnsTeamMatch3 = 10;
johnsTeamAverage = johnsTeamMatch1 + johnsTeamMatch2 + johnsTeamMatch3 / johnsTeamMatches;

mikesTeamMatches = 3;
mikesTeamMatch1 = 10;
mikesTeamMatch2 = 10;
mikesTeamMatch3 = 10;
mikesTeamAverage = mikesTeamMatch1 + mikesTeamMatch2 + mikesTeamMatch3 / mikesTeamMatches;

marysTeamMatches = 3;
marysTeamMatch1 = 10;
marysTeamMatch2 = 10;
marysTeamMatch3 = 10;
marysTeamAverage = marysTeamMatch1 + marysTeamMatch2 + marysTeamMatch3 / marysTeamMatches;


if(johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage){
	console.log('John\'s team has higher score average ' + 
			johnsTeamAverage + ', Mike\'s team has average ' + mikesTeamAverage +
			', Mary\'s team has average ' + marysTeamAverage);
}else if(mikesTeamAverage > johnsTeamAverage && mikesTeamAverage > marysTeamAverage){
	console.log('Mikes\'s team has higher score average ' + 
			mikesTeamAverage + ', John\'s team has average ' + johnsTeamAverage +
			', Mary\'s team has average ' + marysTeamAverage);
}else if(marysTeamAverage > johnsTeamAverage && marysTeamAverage > mikesTeamAverage){
	console.log('Mary\'s team has higher score average ' + 
			marysTeamAverage + ', John\'s team has average ' + johnsTeamAverage +
			', Mike\'s team has average ' + mikesTeamAverage);
}else{
	console.log('It is a draw.');
}

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