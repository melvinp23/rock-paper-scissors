let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
	//code here
}
