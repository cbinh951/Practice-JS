/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
var countRoll = 0;
var scoreForGame;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1. Random
         var dices = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        //var dice = Math.floor(Math.random() * 6) + 1;
        
        //2. Display result
        // var diceDOM = document.querySelector('.dice');
        // diceDOM.style.display = 'block';
        // diceDOM.src = 'dice-' + dice + '.png';

        dices.forEach((dice, key) => {
            displayDice(dice, key);
        });

        //3. Update round score if roll number was not a 1
        // if(dice !== 1) {
        //     roundScore += dice;
        //     countRoll++;
        //     document.getElementById('current-' + activePlayer).textContent = roundScore;
        // }else {
        //     nextPlayer();
        // }

        if(dices.indexOf(1) === -1) {
            roundScore += dices[0] + dices[1];
            countRoll++;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }else {
            nextPlayer();
        }

        if(countRoll === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
    }
});

function displayDice(dice, index) {
    var key = (index === 0) ? '0' : '1';
    var diceDOM = document.querySelector('.dice' + key);
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
        // add score global
        scores[activePlayer] += roundScore;
        
        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check winner
        if(scores[activePlayer] >= scoreForGame){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice0').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else{
            //next player
            nextPlayer();
        }
    } 
});

document.querySelector('.btn-new').addEventListener('click', function(){ 
    init();
});

function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice0').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

    countRoll = 0;
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    scoreForGame = 100;

    // document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice0').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('#btn-score').addEventListener('click', function(){ 
    var score = document.querySelector('.score').value;
    scoreForGame = score;
});