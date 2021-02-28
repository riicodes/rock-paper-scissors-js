function rpsGame(userChoice) {
	var humanChoice, computerChoice;
	humanChoice = userChoice.id;
	computerChoice = numberToChoice(randToRpsInt());
	results = decideWinner(humanChoice, computerChoice);
	message = finalMessage(results);
	console.log(message);
	rpsFrontEnd(humanChoice, computerChoice, message);
}

function randToRpsInt() {
	return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
	return ["rock", "paper", "scissors"][number];
}

function decideWinner(humanChoice, computerChoice) {
	var rpsDatabase = {
		rock: { scissors: 1, rock: 0.5, paper: 0 },
		paper: { rock: 1, paper: 0.5, scissors: 0 },
		scissors: { paper: 1, scissors: 0.5, rock: 0 },
	};
	var humanScore = rpsDatabase[humanChoice][computerChoice];
	var computerScore = rpsDatabase[humanChoice][computerChoice];
	return [humanScore, computerScore];
}

function finalMessage([humanScore, computerScore]) {
	if (humanScore === 0) {
		return { message: "You lost!", color: "red" };
	} else if (humanScore === 0.5) {
		return { message: "You tied!", color: "blue" };
	} else if (humanScore === 1) {
		return { message: "You won!", color: "green" };
	}
}

function rpsFrontEnd(humanImageChoice, computerImageChoice, finalMessage) {
	var imagesDatabase = {
		rock: document.getElementById("rock").src,
		paper: document.getElementById("paper").src,
		scissors: document.getElementById("scissors").src,
	};
	document.getElementById("rock").remove();
	document.getElementById("paper").remove();
	document.getElementById("scissors").remove();

	var humanDiv = document.createElement("img");
	var computerDiv = document.createElement("img");
	var resultMessage = document.createElement("h1");

	humanDiv.src = imagesDatabase[humanImageChoice];
	humanDiv.height = 200;
	humanDiv.width = 200;
	humanDiv.style.boxShadow = "3px 3px 16px 0px gray";
	document.getElementById("container-1").append(humanDiv);

	computerDiv.src = imagesDatabase[computerImageChoice];
	computerDiv.height = 200;
	computerDiv.width = 200;
	computerDiv.style.boxShadow = "3px 3px 16px 0px gray";
	document.getElementById("container-3").append(computerDiv);

	resultMessage.textContent = finalMessage["message"];
	resultMessage.style.color = finalMessage["color"];
	document.getElementById("container-2").append(resultMessage);
}
