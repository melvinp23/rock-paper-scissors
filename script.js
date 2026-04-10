// Initialize player score
let humanScore = 0;
// Initialize computer score
let computerScore = 0;

function playGame() {
	// Player prompt on choosing between rock, paper, or scissors
	function getHumanChoice() {
		const choice = prompt('Rock, paper, or scissors?');
		// Set player prompt to case insensitive
		switch (choice.toLowerCase()) {
			case 'rock':
				console.log('Rock');
				break;
			case 'paper':
				console.log('Paper');
				break;
			case 'scissors':
				console.log('Scissors');
				break;
			case '':
				console.log('Invalid input');
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
		if (humanChoice === 'rock' && computerChoice === 0) {
			console.log(`It's a tie! Pick Again`);
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'rock' && computerChoice === 1) {
			console.log(`You Lose! Paper beats Rock.`);
			computerScore++;
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'rock' && computerChoice === 2) {
			console.log(`You Win! Rock beats Scissors.`);
			humanScore++;
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'paper' && computerChoice === 0) {
			console.log(`You Win! Paper beats Rock.`);
			humanScore++;
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'paper' && computerChoice === 1) {
			console.log(`It's a tie! Pick Again`);
			console.log(`----------------`);
		} else if (humanChoice === 'paper' && computerChoice === 2) {
			console.log(`You Lose! Scissor beats Paper.`);
			computerScore++;
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'scissors' && computerChoice === 0) {
			console.log(`You Lose! Rock beats Scissors.`);
			computerScore++;
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'scissors' && computerChoice === 1) {
			console.log(`You Win! Scissors beats Paper.`);
			humanScore++;
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else if (humanChoice === 'scissors' && computerChoice === 2) {
			console.log(`It's a tie! Pick Again`);
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		} else {
			console.log('Invalid input! Pick again.');
			console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
			console.log(`----------------`);
		}
	}

	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	playRound(humanSelection, computerSelection);
}

for (i = 0; i < 5; i++) {
	playGame();
}
