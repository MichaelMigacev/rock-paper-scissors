function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			computerSign = "rock";
			break;
		case 1:
			computerSign = "paper";
			break;
		case 2:
			computerSign = "scissors";
			break;
		default:
			console.log(ERRRRORRRR);
			break;
	}
	console.log(computerSign);
	return computerSign;
}
computerPlay();
