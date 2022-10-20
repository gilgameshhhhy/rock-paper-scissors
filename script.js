var playerScore = 0;
var computerScore = 0;
var playerSelection;
var computerSelection;


for (var n = 0; n < 5; n++) {
  playerSelection = window.prompt("Choose between rock, paper, and scissors!").toLowerCase();
  game();
  console.log(n);
}

function game() {
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    computerSelection = getComputerChoice();
    playRound();
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
    if (n == 4) {
      if (playerScore > computerScore) {
        console.log("You won against the Computer! Nice job!");
      } else {
        console.log("You lost. Better luck next time!");
      }
    }
  } else {
    window.alert("Choose only from rock, paper, and scissors!")
    if (n == 0) {
      n = 0;
    } else if (n > 1) {
      n--;
    }
  }
}

function getComputerChoice() {
  let compNum = Math.floor(Math.random()*100);
  if (compNum < 33) {
    return "rock";
  } else if (compNum < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound() {
  if (playerSelection == computerSelection) {
    console.log("It's a draw! Both of you chose " + playerSelection + "!");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      console.log("You lost! Your " + playerSelection + " got destroyed by Computer's " + computerSelection + "!");
      computerScore++;
    } else {
      console.log("Nice win! Your " + playerSelection + " beats Computer's " + computerSelection + "!");
      playerScore++;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("Nice win! Your " + playerSelection + " beats Computer's " + computerSelection + "!");
      playerScore++;
    } else {
      console.log("You lost! Your " + playerSelection + " got destroyed by Computer's " + computerSelection + "!");
      computerScore++;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("You lost! Your " + playerSelection + " got destroyed by Computer's " + computerSelection + "!");
      computerScore++;
    } else {
      console.log("Nice win! Your " + playerSelection + " beats Computer's " + computerSelection + "!");
      playerScore++;
    }
  }
}





