
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    return prompt('Make your move').toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 0 && humanChoice === 'paper') {
        humanScore++;
        console.log('You won! Paper beats rock');
    } else if (computerChoice === 0 && humanChoice === 'scissors') {
        computerScore++;
        console.log('You lost! Rock beats scissors');
    } else if (computerChoice === 1 && humanChoice === 'rock') {
        computerScore++;
        console.log('You lost! Paper beats rock');
    } else if (computerChoice === 1 && humanChoice === 'scissors') {
        humanScore++;
        console.log('You won! Scissors beats paper');
    } else if (computerChoice === 2 && humanChoice === 'rock') {
        humanScore++;
        console.log('You won! Rock beats scissors');
    } else if (computerChoice === 2 && humanChoice === 'paper') {
        computerScore++;
        console.log('You lost! Scissors beats paper');
    } else {
        console.log('Draw!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
}

playGame()
console.log(`Your score is: ${humanScore}\nThe computer's score is ${computerScore}`);
