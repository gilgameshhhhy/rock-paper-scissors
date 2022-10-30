let playerScore = 0;
let computerScore = 0;
let n = 1;
let playerSelection;
let computerSelection;
const pScore = document.querySelector('.playerscore');
const cScore = document.querySelector('.computerscore');
const gameText = document.querySelector('.gametext');
const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorsButton = document.querySelector('#scissorsBtn');
const computerChoice = document.createElement('img');
const roundNumber = document.querySelector('#round');

pScore.textContent = "Player Score: " + playerScore;
cScore.textContent = "Computer Score: " + computerScore;

document.getElementById("rockBtn").onclick = () => game("rock");
document.getElementById("paperBtn").onclick = () => game("paper");
document.getElementById("scissorsBtn").onclick = () => game('scissors');
document.getElementById("resetBtn").onclick = () => resetGame();

function game(playerSelection) {
  removeColor(playerSelection);
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    computerSelection = getComputerChoice();
    playRound(playerSelection);
    pScore.textContent = "Player Score: " + playerScore;
    cScore.textContent = "Computer Score: " + computerScore;
    roundNumber.textContent = "Round " + n +"!";
    n++;
    if (n == 6 || playerScore > 3 || computerScore > 3) {
      if (playerScore > computerScore) {
        gameText.textContent = "You won against the Computer! Nice job!";
        disableGame();
      } else if (playerScore == computerScore) {
        gameText.textContent = "It's a tie!";
        disableGame();
      } else {
        gameText.textContent = "You lost. Better luck next time!";
        disableGame();
      }
    }
  }
}

function getComputerChoice() {
  let compNum = Math.floor(Math.random()*100);
  if (compNum < 33) {
    computerChoice.src = "./images/rock.png"
    document.querySelector(".left").appendChild(computerChoice);
    return "rock";
  } else if (compNum < 66) {
    computerChoice.src = "./images/paper.png"
    document.querySelector(".left").appendChild(computerChoice);
    return "paper";
  } else {
    computerChoice.src = "./images/scissors.png"
    document.querySelector(".left").appendChild(computerChoice);
    return "scissors";
  }
}

function playRound(playerSelection) {
  if (playerSelection == computerSelection) {
    gameText.textContent = "It's a draw! Both of you chose " + playerSelection + "!";
    if (playerSelection == "rock") {
      rockButton.classList.add('draw');
    } else if (playerSelection == "paper") {
      paperButton.classList.add('draw');
    } else {
      scissorsButton.classList.add('draw');
    }
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      gameText.textContent = "You lost! Your " + playerSelection + " got destroyed by Computer's " + computerSelection + "!";
      computerScore++;
      rockButton.classList.add('lose');
    } else {
      gameText.textContent = "Nice win! Your " + playerSelection + " beats Computer's " + computerSelection + "!";
      playerScore++;
      rockButton.classList.add('win');
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      gameText.textContent = "Nice win! Your " + playerSelection + " beats Computer's " + computerSelection + "!";
      playerScore++;
      paperButton.classList.add('win');
    } else {
      gameText.textContent = "You lost! Your " + playerSelection + " got destroyed by Computer's " + computerSelection + "!";
      computerScore++;
      paperButton.classList.add('lose');
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      gameText.textContent = "You lost! Your " + playerSelection + " got destroyed by Computer's " + computerSelection + "!";
      computerScore++;
      scissorsButton.classList.add('lose');
    } else {
      gameText.textContent = "Nice win! Your " + playerSelection + " beats Computer's " + computerSelection + "!";
      playerScore++;
      scissorsButton.classList.add('win');
    }
  }
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  n = 0;
  gameText.textContent = "Game reset!";
  pScore.textContent = "Player Score: " + playerScore;
  cScore.textContent = "Computer Score: " + computerScore;
  computerChoice.src = "";
  removeColor();
  rockButton.disabled = !rockButton.disabled;
  paperButton.disabled = !paperButton.disabled;
  scissorsButton.disabled = !scissorsButton.disabled;
}

function disableGame() {
  rockButton.disabled = "true";
  paperButton.disabled = "true";
  scissorsButton.disabled = "true";
}

function removeColor() {
    rockButton.classList.remove('lose');
    rockButton.classList.remove('win');
    rockButton.classList.remove('draw');
    paperButton.classList.remove('lose');
    paperButton.classList.remove('win');
    paperButton.classList.remove('draw');
    scissorsButton.classList.remove('lose');
    scissorsButton.classList.remove('win');
    scissorsButton.classList.remove('draw');
}