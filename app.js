const newGame = document.querySelector('#newGame');
newGame.onclick = () => {
   const h1 = document.querySelector('h1');
   h1.textContent = 'Choose your destiny!';
   const selection = ['rock', 'paper', 'scissors'];
   let playerScoreSpan = document.querySelector("#playerScoreSpan");
   let computerScoreSpan = document.querySelector("#computerScoreSpan");
   const body = document.querySelector('body');
   let playerScore = 0;
   let computerScore = 0;
   let finalScore = 0;
   playerScoreSpan.textContent = 0;
   computerScoreSpan.textContent = 0;
   computerPara.textContent = '';
   playerPara.textContent = '';
   theScoreText.textContent = '';

   //player play with addEventListener
   const choices = document.querySelectorAll('.choice');
   choices.forEach(choice => choice.addEventListener('click', playerPlay));

   function playerPlay(e) {
      let playerSelection = "";
      if (e.target.id == "rock") {
         playerSelection += "rock";
         playerPara.textContent = 'You choose \"rock"';
      } else if (e.target.id == "paper") {
         playerSelection += "paper";
         playerPara.textContent = 'You choose \"paper"';
      } else if (e.target.id == "scissors") {
         playerSelection += "scissors";
         playerPara.textContent = 'You chose \"scissors"';
      }

      //computer play with math.random immediately after the player
      const computerSelection = selection[Math.floor(Math.random() * selection.length)];
      computerPara.textContent = `The computer chose "${computerSelection}"`;

      //managing the score and printing them into h2's
      if (computerSelection === playerSelection) {
         theScoreText.textContent = `It's a tie!`;
      } else if (computerSelection === 'rock' && playerSelection === 'paper') {
         playerScore += 1;
         theScoreText.textContent = 'You win! GG!';
         playerScoreSpan.textContent = parseInt(playerScoreSpan.textContent) + 1;
      } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
         computerScore += 1;
         theScoreText.textContent = 'You lose...';
         computerScoreSpan.textContent = parseInt(computerScoreSpan.textContent) + 1;
      } else if (computerSelection === 'paper' && playerSelection === 'rock') {
         computerScore += 1;
         theScoreText.textContent = 'You lose...';
         computerScoreSpan.textContent = parseInt(computerScoreSpan.textContent) + 1;
      } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
         playerScore += 1;
         theScoreText.textContent = 'You win! GG!';
         playerScoreSpan.textContent = parseInt(playerScoreSpan.textContent) + 1;
      } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
         playerScore += 1;
         theScoreText.textContent = 'You win! GG!';
         playerScoreSpan.textContent = parseInt(playerScoreSpan.textContent) + 1;
      } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
         computerScore += 1;
         theScoreText.textContent = 'You lose...';
         computerScoreSpan.textContent = parseInt(computerScoreSpan.textContent) + 1;
      }
      if (playerScore == 5 && playerScore > computerScore) {
         body.setAttribute('style', 'display:none;');
         alert(`You win the entire game with ${playerScore} to ${computerScore}. Reload the page to play again!`);
      } else if (computerScore == 5 && computerScore > playerScore) {
         body.setAttribute('style', 'display:none;');
         alert(`You lost the game... ${playerScore} to ${computerScore}. Reload the page to play again!`);
      }
   }
}

/**Version 1
//main list of choices
const selection = ['rock', 'paper', 'scissors'];

//computer play with math.random
function computerPlay() {
   const computerSelection = selection[Math.floor(Math.random() * selection.length)];
   console.log(`Computer chose ${computerSelection}`)
   return computerSelection;
}

//player play with prompt
function playerPlay() {

   const playerSelection = prompt("Enter your choice (rock, paper or scissors): ");
   if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors') {
      console.log(`You chose ${playerSelection}`);
   } else {
      console.log(`Your choice is invalid.`);
      return playerPlay();
   }
   return playerSelection;
}

//play one round
let game = () => {
   let playerWins = 0;
   let computerWins = 0;
   for (let i = 1; i < 6; i++) {
      const computerSelection = computerPlay();
      const playerSelection = playerPlay();
      let playRound = (computerSelection, playerSelection) => {
         if (computerSelection === playerSelection) {
            console.log(`You both made the same choice, so it's a tie!`);
         } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerWins += 1;
         } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerWins += 1;
         } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerWins += 1;
         } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerWins += 1;
         } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerWins += 1;
         } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerWins += 1;
         }
      }
      playRound(computerSelection, playerSelection);
   }
   console.log(`The final score is Player: ${playerWins} points and Computer: ${computerWins} points`)
   if (playerWins === computerWins) {
      console.log(`It's a tie!`)
   } else if (playerWins > computerWins) {
      console.log('You win the game! GG!');
   } else if (computerWins > playerWins) {
      console.log('You lost! Try again..');
   }
}
*/