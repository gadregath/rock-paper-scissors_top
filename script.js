
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let computerChoice = getComputerChoice();

if (computerChoice === 0) {
    console.log('Rock');
} else if (computerChoice === 1) {
    console.log('Paper');
} else if (computerChoice === 2) {
    console.log('Scissors');
}

function getHumanChoice(){
    return prompt('Make your move').toLowerCase();
}

let humanChoice = getHumanChoice();

if (humanChoice === 'rock') {
    console.log('Rock');
} else if (humanChoice === 'paper') {
    console.log('Paper');
} else if (humanChoice === 'scissors') {
    console.log('Scissors');
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

playRound(computerChoice, humanChoice);

