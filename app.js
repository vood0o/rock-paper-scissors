/*
we will play with the computer
computer randomly selects one of three options - rock or paper or scissors through math random
player selects one of three options - rock or paper or scissors in a prompt window
*/


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

/*
we compare computerSelection with playerSelection
   IF computerSelection is rock AND playerSelection is paper
      player wins
   IF computerSelection is rock AND playerSelection is scissors
      computer wins

   IF computerSelection is paper AND playerSelection is rock
      computer wins
   IF computerSelection is paper AND playerSelection is scissors
      player wins

      IF computerSelection is scissors AND playerSelection is rock
      player wins
   IF computerSelection is scissors AND playerSelection is paper
      computer wins
   ELSE
      it's a tie, restart game
*/