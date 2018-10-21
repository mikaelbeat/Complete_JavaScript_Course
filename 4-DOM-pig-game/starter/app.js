/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying = true;

var previousRoll, currentRoll;

startNewGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
	
	if(gamePlaying){
//	var dice = Math.floor(Math.random() * 6) + 1;
var dice = 6;
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	console.log('Dice is: ' + dice);
	if(dice !== 1){
		console.log('Current roll: ' + dice);
		console.log('Previous roll: ' + previousRoll)
		if((dice == 6) && (previousRoll == 6)){
			console.log('First else');
			nextPlayer();
		}else{
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			previousRoll = dice;
			console.log('Old roll: ' + previousRoll)
		}

	}else{
		console.log('Second else');
		nextPlayer();
	}
	}

});

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying){
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	if(scores[activePlayer] >= 10){
		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
		document.querySelector('.dice').style.display = 'none';
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
}

document.querySelector('.btn-new').addEventListener('click', startNewGame);

function startNewGame(){

	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;

	document.querySelector('.dice').style.display = 'none';
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