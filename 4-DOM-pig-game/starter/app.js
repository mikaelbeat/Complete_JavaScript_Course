/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying = true, setScore;

var previousDice, previousDice2;

startNewGame();

document.querySelector('.btn-roll').addEventListener('click', function(){

	setScore = document.getElementById("setScore").value;
	
	if(setScore <= 0){
		setScore = 50;
		console.log('Score is set to ' + setScore);
	}else{
		console.log('Score is set to ' + setScore);
	}
	
	if(gamePlaying){
	var dice = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector('.dice');
	var diceDOM2 = document.querySelector('.dice2');
	diceDOM.style.display = 'block';
	diceDOM2.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	diceDOM2.src = 'dice-' + dice2 + '.png';
	console.log('Dice1 is: ' + dice);
	console.log('Dice2 is: ' + dice2);
	if((dice != 1) && (dice2 != 1)) {
		console.log('Previous dice1 : ' + previousDice);
		console.log('Previous dice2 : ' + previousDice2);
		console.log('************************');
		if(((dice || dice2) == 6) && ((previousDice || previousDice2) == 6)){
			console.log('Rolled 6 twice, change player');
			console.log('************************');
			scores[activePlayer] = 0;
			document.getElementById('score-' + activePlayer).textContent = '0';
			console.log('Rolled 6 twice, score set to 0');
			nextPlayer();
		}else{
			roundScore += dice + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			previousDice = dice;
			previousDice2 = dice2;
		}

	}else{
		scores[activePlayer] = 0;
		document.getElementById('score-' + activePlayer).textContent = '0';
		console.log('One dice was 1, score set to 0 and give turn to another player.');
		console.log('************************');
		nextPlayer();
	}
	}

});

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying){
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	if(scores[activePlayer] >= setScore){
		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	}else{
		nextPlayer();
	}
	}

});

function nextPlayer(){
	
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

//		if(activePlayer == 0){
//		activePlayer = 1;
//		}else{
//		activePlayer = 0;
//		}

	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', startNewGame);

function startNewGame(){

	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}