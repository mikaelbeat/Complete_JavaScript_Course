
var bills = [124,48,268,180,42];

var tips =[];
var finalBill = [];

for(var i = 0; i < bills.length; i++){
	tipCalculator(bills[i], i+1);
}



function tipCalculator(bill, restaurantNro){
	
	var tipPercantage;
	var tipAmount;
	var fullBill;
	
	if(bill < 50){
		tipPercantage = 0.2;
	}else if(bill >= 50 && bill <= 200){
		tipPercantage = 0.15;
	}else{
		tipPercantage = 0.1;
	}
	
	tipAmount = bill * tipPercantage;
	tips.push(tipAmount);
	fullBill = tipAmount + bill;
	finalBill.push(fullBill);
	console.log('In restaurant number ' + restaurantNro + ' bill was ' + bill +
				'€ and tip was ' + tipAmount + '€. Final bill was ' + fullBill + '€.');
	console.log('Given tips were ' + tips);
	console.log('Final bills from restaurants were ' + finalBill);
}


console.log('\n********************************************************');
	

	
var mark ={
		fullName: 'Mark Miller',
		bills: [124, 48, 268, 180, 42],
		
		calcTips: function(){
			this.tips = [];
			this.finalValues = [];
			
			for (var i = 0; i < this.bills.length; i++){
				
				var percentage;
				var bill = this.bills[i];
				
				if(bill < 50){
					percentage = .2;
				}else if(bill >= 50 && bill < 200){
					percentage = .15;
				}else{
					percentage = .1;
				}
				
				this.tips[i] = bill * percentage;
				this.finalValues[i] = bill + bill * percentage;
			}
		}
}

function calcAverage(tips){
	var sum = 0;
	for(var i = 0; i < tips.length; i++){
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

mark.calcTips();
console.log(mark);
console.log('Avarage from Marks tips is: ' + calcAverage(mark.tips) + '.');
	


console.log('\n********************************************************');