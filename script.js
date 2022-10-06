let playerScore = 0
let computerScore = 0


function getComputerChoice(comp) {
    comp = ["rock", "paper", "scissors"]
    return comp[Math.floor(Math.random() * comp.length)]
}



function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    playerSelection = prompt("rock, paper, or scissors?").toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        ++playerScore; 
        return "You Win! " + playerSelection + " beats " + computerSelection +"."
        }

    else if (playerSelection == computerSelection){
        return "Its a tie. You both chose " + playerSelection
    }

    else {
        ++computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection + "."
    }
    
}


const computerSelection = getComputerChoice()
const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();


function gameScore() {
    return "Computer: " + computerScore + " Player: " + playerScore
}

function game() {

    for (let round = 0; round < 5; ++round) {
        console.log(playRound(playerSelection));
        console.log(gameScore());
        }
    if (computerScore > playerScore){
        return "You lose the game."
    }
    else if (computerScore < playerScore){
        return "You win the game."
    }
    else if (computerScore === playerScore){
        return "It is a tie."
    }
}

function playAgain(){
    console.log(game())
}
console.log(game())