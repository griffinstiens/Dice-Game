/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result
get added
to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that,
 it's the next player's
 turn
- The player can choose to 'Hold', which means that his ROUND score gets
added to his GLBAL score.
After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Declaring empty primary variables
var scores, roundScore, activePlayer, dice, gamePlaying;

//Initialize game
init();

// document.querySelector('#current-' + activePlayer).textContent = dice;
//.textContent can only display text, no HTML
// document.querySelector('#current-' + activePlayer).innerHTML =
// '<em>' + dice + '</em>';




/*
function btn() {

} */

//inserting callback function
// document.querySelector('.btn-roll').addEventListener('click', /*insert function*/);

//inserting anonymous function - no name, cannot be used outside of this selection
document.querySelector('.btn-roll').addEventListener('click', function () {

  if (gamePlaying) {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      //roundScore = roundScore + dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      //Next Player when dice roll is = 1
      nextPlayer();
    }
  }

}); /* End event listener for .btn-roll */

document.querySelector('.btn-hold').addEventListener('click', function () {

  if (gamePlaying) {
    //Add current score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;

    } else {
      nextPlayer();
    }
  }



}); /* End event listener for .btn-hold */


document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  //Same as
  // if (activePlayer === 0) {
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0;
  // }

  //If roundScore = 1, currentScore is reset to 0 - applies to both players
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //Toggles the .active class for both player panels so it is
  //obvious who the active player is
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  //After a roll of 1, the dice image is hidden until the new player
  //starts their first roll in the round
  document.querySelector('.dice').style.display = 'none';
}

function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0; //0 will be 1st player, 1 will be 2nd player

  //Selects the image with class .dice and hides it
  document.querySelector('.dice').style.display = 'none';

  //Sets displays to 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  gamePlaying = true;

}
























/* */
