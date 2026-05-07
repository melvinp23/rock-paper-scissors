const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const humanChoiceDisplay = document.querySelector('#human');
const computerChoiceDisplay = document.querySelector('#computer');
const roundResult = document.querySelector('#roundResult');
const reset = document.querySelector('#resetBtn');

let humanScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const choice = choices[Math.floor(Math.random() * 3)];
	computerChoiceDisplay.textContent = `Computer picked: ${choice}`;
	return choice;
}

// Play one round
function playRound(humanChoice) {
	const computerChoice = getComputerChoice();
	humanChoiceDisplay.textContent = `You picked: ${humanChoice}`;

	const resultPara = document.createElement('p');
	const scorePara = document.createElement('h3');

	if (humanChoice === computerChoice) {
		resultPara.textContent = `It's a tie! Pick Again`;
	} else if (
		(humanChoice === 'rock' && computerChoice === 'scissors') ||
		(humanChoice === 'paper' && computerChoice === 'rock') ||
		(humanChoice === 'scissors' && computerChoice === 'paper')
	) {
		resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
		humanScore++;
	} else {
		resultPara.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
		computerScore++;
	}

	scorePara.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

	roundResult.appendChild(resultPara);
	roundResult.appendChild(scorePara);

	// Check win condition
	if (humanScore === 5) {
		endGame('Player');
	} else if (computerScore === 5) {
		endGame('Computer');
	}
}

// End game
function endGame(winner) {
	const finalMsg = document.createElement('h2');
	const resetBtn = document.createElement('button');
	finalMsg.textContent = `${winner} wins the game! (First to 5)`;
	resetBtn.textContent = `RESET`;

	roundResult.appendChild(finalMsg);
	reset.appendChild(resetBtn);

	gameOver = true;

	// Disable buttons
	rockBtn.disabled = true;
	paperBtn.disabled = true;
	scissorsBtn.disabled = true;

	resetBtn.onclick = () => {
		history.go(0);
	};
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
