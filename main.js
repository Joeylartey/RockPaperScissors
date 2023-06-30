let score = document.querySelector('.score-num');
let initialScore = 0;

const whoPickedWhat = document.querySelector(".who-picked-what");

const gameDiv = document.getElementById("game");

gameDiv.className = 'game';

const secondScreen = document.getElementById('second-screen');
secondScreen.className = 'second-screen';

const displayButton = document.createElement('button');

// Create the image element with the id "image-triangle"
const imageTriangle = document.createElement('img');
imageTriangle.src = "./images/bg-triangle.svg";
imageTriangle.alt = "Rock";
imageTriangle.id = "image-triangle";
gameDiv.appendChild(imageTriangle);

// Create paperDiv
const paperDiv = document.createElement('div');
paperDiv.className = "paper";
// paperDiv.id = "paperId"

// Create the nested divs for choice1
const thickBorderBlueDiv1 = document.createElement('div');
thickBorderBlueDiv1.className = 'thick-border blue';

const whiteBackgroundDiv1 = document.createElement('div');
whiteBackgroundDiv1.className = "white-background";

const paperImg = document.createElement('img');
paperImg.src = './images/icon-paper.svg';
paperImg.alt = 'Paper';
paperImg.className = 'choice-image';

whiteBackgroundDiv1.appendChild(paperImg);
thickBorderBlueDiv1.appendChild(whiteBackgroundDiv1);
paperDiv.appendChild(thickBorderBlueDiv1);
gameDiv.appendChild(paperDiv);

// Create scissorsDiv
const scissorsDiv = document.createElement('div');
scissorsDiv.className = 'scissors';

// Create the nested divs for choice2
const thickBorderOrangeDiv = document.createElement('div');
thickBorderOrangeDiv.className = 'thick-border orange';

const whiteBackgroundDiv2 =  document.createElement('div');
whiteBackgroundDiv2.className = 'white-background';

const scissorsImg = document.createElement('img');
scissorsImg.src = './images/icon-scissors.svg';
scissorsImg.alt = 'Scissors';
scissorsImg.className = 'choice-image';

whiteBackgroundDiv2.appendChild(scissorsImg);
thickBorderOrangeDiv.appendChild(whiteBackgroundDiv2);
scissorsDiv.appendChild(thickBorderOrangeDiv);
gameDiv.appendChild(scissorsDiv);

// Create rockDiv
const rockDiv = document.createElement('div');
rockDiv.className = 'rock';

// Create the nested divs for choice3
const thickBorderRedDiv = document.createElement('div');
thickBorderRedDiv.className = 'thick-border red';

const whiteBackgroundDiv3 = document.createElement('div');
whiteBackgroundDiv3.className = 'white-background';

const rockImg = document.createElement('img');
rockImg.src = './images/icon-rock.svg';
rockImg.alt = 'Rock';
rockImg.className = 'choice-image';

whiteBackgroundDiv3.appendChild(rockImg);
thickBorderRedDiv.appendChild(whiteBackgroundDiv3);
rockDiv.appendChild(thickBorderRedDiv);
gameDiv.appendChild(rockDiv);

// Add an click event listener to the paperDiv

paperDiv.addEventListener('click', handlePaperClick);

function handlePaperClick() {
	resetGame();
	gameDiv.style.display = 'none';
	whoPickedWhat.style.display = 'flex';
	secondScreen.style.display = 'flex';
	generatePaperDiv();

	const displayResult = document.createElement('div');
	displayResult.className = 'result-display';
	let h2 = document.createElement('h2');
	h2.innerHTML = '';
	
	displayButton.textContent = 'Play Again';
	displayResult.appendChild(h2);
	displayResult.appendChild(displayButton);
	secondScreen.appendChild(displayResult);

	const result = generateComputerDiv();	
	if (result === 'rock') {
		// console.log("You have won");
		h2.innerHTML = 'You won';
		score.innerHTML = ++initialScore;
		displayResult.style.display = 'flex';
	} else if (result === 'scissors') {
		// console.log('You have lost');
		h2.innerHTML = 'You lost';
		score.innerHTML = --initialScore;
		displayResult.style.display = 'flex';
	} else {
		// console.log("There is a tie");
		h2.innerHTML = 'There is a tie';
		displayResult.style.display = 'flex';
	}
}

scissorsDiv.addEventListener('click', () => {
	resetGame();
	gameDiv.style.display = 'none';
	whoPickedWhat.style.display = 'flex';
	secondScreen.style.display = 'flex';
	generateScissorsDiv();

	const displayResult = document.createElement('div');
	displayResult.className = 'result-display';
	let h2 = document.createElement('h2');
	h2.innerHTML = '';
	
	displayButton.textContent = 'Play Again';
	displayResult.appendChild(h2);
	displayResult.appendChild(displayButton);
	secondScreen.appendChild(displayResult);

	const result = generateComputerDiv();
	if (result === 'paper') {
		// console.log("You have won");
		h2.innerHTML = 'You won';
		score.innerHTML = ++initialScore;
		displayResult.style.display = 'flex'
	} else if (result === 'rock') {
		// console.log('You have lost');
		h2.innerHTML = 'You lost';
		score.innerHTML = --initialScore;
		displayResult.style.display = 'flex';
	} else {
		// console.log("There is a tie");
		h2.innerHTML = 'There is a tie';
		displayResult.style.display = 'flex';
	}
});

rockDiv.addEventListener('click', () => {
	resetGame(); 
	gameDiv.style.display = 'none';
	whoPickedWhat.style.display = 'flex';
	secondScreen.style.display = 'flex';
	generateRockDiv();

	const displayResult = document.createElement('div');
	displayResult.className = 'result-display';
	let h2 = document.createElement('h2');
	h2.innerHTML = '';
	
	displayButton.textContent = 'Play Again';
	displayResult.appendChild(h2);
	displayResult.appendChild(displayButton);
	secondScreen.appendChild(displayResult);

	const result = generateComputerDiv();
	
	if (result === 'scissors') {
		// console.log("You have won");
		h2.innerHTML = 'You won';
		score.innerHTML = ++initialScore;
		displayResult.style.display = 'flex'
	} else if (result === 'paper') {
		// console.log("You have lost");
		h2.innerHTML = 'You lost';
		score.innerHTML = --initialScore;
		displayResult.style.display = 'flex'
	} else {
		// console.log("There is a tie");
		h2.innerHTML = 'There is a tie';
		displayResult.style.display = 'flex'
	}
});

displayButton.addEventListener('click', () => {
	console.log("Display Button has been clicked");
	secondScreen.style.display = 'none';
	whoPickedWhat.style.display = 'none';

	gameDiv.style.display = 'block';

});

function generateComputerDiv() {
	let randomNumber = Math.floor(Math.random() * 3)
	let computerChoice;
	switch (randomNumber) {
		case 0: 
			generateRockDiv();
			computerChoice= 'rock'
			break;
		case 1:
			generatePaperDiv();
			computerChoice = 'paper';
			break;
			
		case 2: 
			generateScissorsDiv();
			computerChoice = 'scissors';
			break;
	}
	return computerChoice;
}

function generatePaperDiv() {
	// Generate paperDiv
	const paperDiv = document.createElement('div');
	// paperDiv.className = "second-screen";

	// Create the nested divs for choice1
	const thickBorderBlueDiv1 = document.createElement('div');
	thickBorderBlueDiv1.className = 'thick-border blue';

	const whiteBackgroundDiv1 = document.createElement('div');
	whiteBackgroundDiv1.className = "white-background";

	const paperImg = document.createElement('img');
	paperImg.src = './images/icon-paper.svg';
	paperImg.alt = 'Paper';
	paperImg.className = 'choice-image';

	whiteBackgroundDiv1.appendChild(paperImg);
	thickBorderBlueDiv1.appendChild(whiteBackgroundDiv1);
	paperDiv.appendChild(thickBorderBlueDiv1);
	secondScreen.appendChild(paperDiv);
	paperDiv.style.transform = 'scale(1.5)';

}

function generateScissorsDiv() {
	// Generate scissorsDiv
	const scissorsDiv = document.createElement('div');
	// scissorsDiv.className = 'second-screen';

	// Create the nested divs for choice2
	const thickBorderOrangeDiv = document.createElement('div');
	thickBorderOrangeDiv.className = 'thick-border orange';

	const whiteBackgroundDiv2 =  document.createElement('div');
	whiteBackgroundDiv2.className = 'white-background';

	const scissorsImg = document.createElement('img');
	scissorsImg.src = './images/icon-scissors.svg';
	scissorsImg.alt = 'Scissors';
	scissorsImg.className = 'choice-image';

	whiteBackgroundDiv2.appendChild(scissorsImg);
	thickBorderOrangeDiv.appendChild(whiteBackgroundDiv2);
	scissorsDiv.appendChild(thickBorderOrangeDiv);
	secondScreen.appendChild(scissorsDiv);
	scissorsDiv.style.transform = 'scale(1.5)';
}

function generateRockDiv() {
	// Generate rockDiv
	const rockDiv = document.createElement('div');
	// rockDiv.className = 'second-screen';

	// Create the nested divs for choice3
	const thickBorderRedDiv = document.createElement('div');
	thickBorderRedDiv.className = 'thick-border red';

	const whiteBackgroundDiv3 = document.createElement('div');
	whiteBackgroundDiv3.className = 'white-background';

	const rockImg = document.createElement('img');
	rockImg.src = './images/icon-rock.svg';
	rockImg.alt = 'Rock';
	rockImg.className = 'choice-image';

	whiteBackgroundDiv3.appendChild(rockImg);
	thickBorderRedDiv.appendChild(whiteBackgroundDiv3);
	rockDiv.appendChild(thickBorderRedDiv);

	secondScreen.appendChild(rockDiv);
	rockDiv.style.transform = 'scale(1.5)';
}

function resetGame() {
	// Remove the paperDiv, scissorsDiv, and rockDiv from the secondScreen
	while (secondScreen.firstChild) {
	  secondScreen.removeChild(secondScreen.firstChild);
	}
  }
  


