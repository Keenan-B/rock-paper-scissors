let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice()
const container = document.querySelector('#container');
const playerDrawRock = document.querySelector('#playerDrawRock');
const playerDrawPaper = document.querySelector('#playerDrawPaper');
const playerDrawScissors = document.querySelector('#playerDrawScissors');
const scoreBoard = document.querySelector('#scoreBoard');
const declareWinner = document.querySelector('#declareWinner');

playerDrawRock.addEventListener("click", function(){
    container.textContent = playRound(playerDrawRock.textContent.toLowerCase());
    scoreBoard.textContent = gameScore();
})

playerDrawPaper.addEventListener("click", function(){
    container.textContent = playRound(playerDrawPaper.textContent.toLowerCase());
    scoreBoard.textContent = gameScore();
})

playerDrawScissors.addEventListener("click", function(){
    container.textContent = playRound(playerDrawScissors.textContent.toLowerCase());
    scoreBoard.textContent = gameScore();
})

function getComputerChoice(comp) {
    comp = ["rock", "paper", "scissors"]
    return comp[Math.floor(Math.random() * comp.length)]
}



function playRound(playerSelection) {
    let computerSelection = getComputerChoice()


    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        ++playerScore; 
        checkwinner()
        return "You Win! " + playerSelection + " beats " + computerSelection +"."
        }

    else if (playerSelection == computerSelection){
        return "Its a tie. You both chose " + playerSelection
    }

    else {
        ++computerScore;
        checkwinner()
        return "You lose! " + computerSelection + " beats " + playerSelection + "."
    }
    
}

function gameScore() {
    return "Computer: " + computerScore + " Player: " + playerScore
}
function checkwinner(){
    if (playerScore > 4){
    declareWinner.textContent = "You win the game!";
    }

    if (computerScore > 4){
    declareWinner.textContent = "You lose the game.";
    }
}