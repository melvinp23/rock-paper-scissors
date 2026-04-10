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
