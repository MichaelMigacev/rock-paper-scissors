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
	return computerSign;
}
function askChoice() {
	const choice = prompt("Please choose: rock, paper or scissors.");
	const lowerCaseChoice = choice.toLowerCase();
	return lowerCaseChoice;
}
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		text = "It's a tie!";
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		text = "Rock beats scissors. You win!";
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		text = "Paper beats rock. You lose! Beeb bop!";
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		text = "Rock beats scissors. You lose! 10101011!";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		text = "Scissors beat paper. You win!";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		text = "Paper beat rock. You win! Congrats!";
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		text = "Scissors beat paper. You lose! 10101110!";
	} else {
		text = "Something went wrong";
	}
	return text;
}
const playerSelection = askChoice();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
