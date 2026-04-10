// Initialize player score
let humanScore = 0;
// Initialize computer score
let computerScore = 0;

// Player prompt on choosing between rock, paper, or scissors
function getHumanChoice() {
	const choice = prompt('Rock, paper, or scissors?');
	switch (choice) {
		case 'Rock':
			console.log('Rock');
			break;
		case 'Paper':
			console.log('Paper');
			break;
		case 'Scissors':
			console.log('Scissors');
			break;
		default:
			console.log('Invalid input');
	}
	return choice;
}

// Computer random choice between rock, paper, or scissors
function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		console.log('Rock');
	} else if (choice === 1) {
		console.log('Paper');
	} else {
		console.log('Scissors');
	}
	return choice;
}

// Single round of rock paper scissors
function playRound(humanChoice, computerChoice) {
	if (humanChoice === 'Rock' && computerChoice === 0) {
		console.log(`It's a tie! Pick Again`);
	} else if (humanChoice === 'Rock' && computerChoice === 1) {
		console.log(`You Lose! Paper beats Rock.`);
	} else if (humanChoice === 'Rock' && computerChoice === 2) {
		console.log(`You Win! Rock beats Scissors.`);
	} else if (humanChoice === 'Paper' && computerChoice === 0) {
		console.log(`You Win! Paper beats Rock.`);
	} else if (humanChoice === 'Paper' && computerChoice === 1) {
		console.log(`It's a tie! Pick Again`);
	} else if (humanChoice === 'Paper' && computerChoice === 2) {
		console.log(`You Lose! Scissor beats Paper.`);
	} else if (humanChoice === 'Scissors' && computerChoice === 0) {
		console.log(`You Lose! Rock beats Scissors.`);
	} else if (humanChoice === 'Scissors' && computerChoice === 1) {
		console.log(`You Win! Scissors beats Paper.`);
	} else if (humanChoice === 'Scissors' && computerChoice === 2) {
		console.log(`It's a tie! Pick Again`);
	} else {
		console.log('Invalid input! Pick again.');
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/*
To-do:
- Case sensitive prompt
- Tally score
- Limit Rounds to 5 Rounds
*/
