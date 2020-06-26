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
		round = "tied";
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		text = "Rock beats scissors. You win!";
		round = "won";
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		text = "Paper beats rock. You lose! Beeb bop!";
		round = "lost";
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		text = "Rock beats scissors. You lose! 10101011!";
		round = "lost";
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		text = "Scissors beat paper. You win!";
		round = "won";
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		text = "Paper beat rock. You win! Congrats!";
		round = "won";
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		text = "Scissors beat paper. You lose! 10101110!";
		round = "lost";
	} else {
		text = "Choose a valid option.";
		round = "big mistake";
	}
}
function game() {
	let i = 0;
	let playerScore = 0;
	let computerScore = 0;
	while (i < 5) {
		const playerSelection = askChoice();
		const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
		console.log(text);
		if (round == "tied") {
			console.log("TIE");
		} else if (round == "won") {
			playerScore++;
		} else if (round == "lost") {
			computerScore++;
		} else {
			console.log("a mistake has occurred");
		}
		score = `The current score is ${playerScore} : ${computerScore} !`;
		console.log(score);
		i++;
	}
	finalScore = `The FINAL score is ${playerScore} : ${computerScore} !!!`;
	if (playerScore - computerScore == 0) {
		theWinnerIs = "ITS A TIE";
	} else if (playerScore - computerScore < 0) {
		theWinnerIs = "YOU LOSE! 1000111001011 beeb boop";
	} else if (playerScore - computerScore > 0) {
		theWinnerIs = "YOU OBLITERATED THE MASHINE!!! HUMANITY WINS ONCE AGAIN";
	} else {
		console.log("A major ERROR has occurred");
	}
	console.log(finalScore);
	console.log(theWinnerIs);
}

game();
