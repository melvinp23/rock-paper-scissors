// Initialize player score
let humanScore = 0;
// Initialize computer score
let computerScore = 0;

// Computer random choice of rock, paper, or scissors
function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			console.log('Rock');
			break;
		case 1:
			console.log('Paper');
			break;
		default:
			console.log('Scissors');
	}
}

// Player prompt on choosing between rock, paper, or scissors
function getHumanChoice() {
	const choice = prompt('Rock, paper, or scissors?');
	switch (choice) {
		case 'Rock':
			console.log('You chose rock');
			break;
		case 'Paper':
			console.log('You chose paper');
			break;
		case 'Scissor':
			console.log('You chose scissor');
			break;
		default:
			console.log('Invalid input');
	}
}

// Single round of rock paper scissors
function playRound(humanChoice, computerChoice) {
	//code here
}
