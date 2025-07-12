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
    return prompt('Make your move');
}

let humanChoice = getHumanChoice();

if (humanChoice === 'Rock') {
    console.log('Rock');
} else if (humanChoice === 'Paper') {
    console.log('Paper');
} else if (humanChoice === 'Scissors') {
    console.log('Scissors');
}
