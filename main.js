let score = document.querySelector('.score-num');
let initialScore = 0;
const whoPickedWhat = document.querySelector(".who-picked-what");
const gameDiv = document.getElementById("game");
gameDiv.className = 'game';

const secondScreen = document.getElementById('second-screen');
secondScreen.className = 'second-screen';

// Display button for the secondScreen
const displayButton = document.createElement('button');

// May not need to use this
const rules = document.querySelector('.rules');

// May delete the following block:
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

// Show/Hide Rules
btnRules.addEventListener("click", () => {
	modalRules.classList.toggle("show-modal");
  });
  btnClose.addEventListener("click", () => {
	modalRules.classList.toggle("show-modal");
  });
  
  // Dealing with media queries for mobile
  const mediaQuery = window.matchMedia('(max-width: 375px)');

  const handleMatches = (mediaQuery) => {
	if (mediaQuery.matches) { 
		paperDiv.style.transform = 'scale(0.65)';
	} else {
		paperDiv.style.transform = 'scale(1.5)';
	}
}
// Create the image element with the id "image-triangle"
const imageTriangle = document.createElement('img');
imageTriangle.src = "./images/bg-triangle.svg";
imageTriangle.alt = "Rock";
imageTriangle.className = "image-triangle";
gameDiv.appendChild(imageTriangle);

// Create PaperDiv
const paperDiv = document.createElement('div')
const paperImg = document.createElement('img');
paperImg.src = './my_images/paperDiv.svg';
paperImg.alt = 'Paper';
paperDiv.appendChild(paperImg);
paperDiv.className = "paper";

gameDiv.appendChild(paperDiv);

// Create ScissorsDiv
const scissorsDiv = document.createElement('div');
const scissorsImg = document.createElement('img');
scissorsImg.src = './my_images/scissorsDiv.svg';
scissorsImg.alt = 'Scissors';
scissorsDiv.appendChild(scissorsImg);
scissorsDiv.className = 'scissors';

gameDiv.appendChild(scissorsDiv);

// Create rockDiv
const rockDiv = document.createElement('div');
const rockImg = document.createElement('img');
rockImg.src = './my_images/rockDiv.svg';
rockImg.alt = 'Rock';
rockDiv.appendChild(rockImg)
rockDiv.className = 'rock';

gameDiv.appendChild(rockDiv);

// Add an click event listener to the paperDiv
paperDiv.addEventListener('click', handlePaperClick);

function handlePaperClick() {
	resetGame();
	gameDiv.style.display = 'none';
	whoPickedWhat.style.display = 'flex';
	secondScreen.style.display = 'flex';
	generatePaperDiv();

	const blackboxDiv = document.createElement('div');
	blackboxDiv.className = 'blackbox';
	secondScreen.appendChild(blackboxDiv);

	setTimeout(() => {
		blackboxDiv.style.display = "none";
	}, 500)

	const displayResult = document.createElement('div');
	displayResult.className = 'result-display';
	let h2 = document.createElement('h2');
	h2.innerHTML = '';

	// const displayButton = document.createElement('button');
	displayButton.textContent = 'Play Again';
	displayResult.appendChild(h2);
	displayResult.appendChild(displayButton);
	secondScreen.appendChild(displayResult);

	setTimeout(() => {
		const result = generateComputerDiv();
		if (result === 'rock') {
			h2.innerHTML = 'You won';
			score.innerHTML = ++initialScore;
			secondScreen.firstChild.classList.add('ripple-effect');
			console.log(secondScreen.firstChild);
			// console.log(secondScreen);
		} else if (result === 'scissors') {
			h2.innerHTML = 'You lost';
			score.innerHTML = --initialScore;
			console.log(secondScreen);
			secondScreen.lastChild.classList.add('ripple-effect');
			console.log(secondScreen.lastChild);
		} else { 
			h2.innerHTML = 'There is a tie';
			console.log(secondScreen);
		}
	}, 1000)
	
	// This is what secondScreen outputs
	// <div id="second-screen" class="second-screen" style="display: flex; margin-left: 200px; width: 936px;">
	// <div class="ripple-effect" style="transform: scale(1.5);"><img src="./my_images/paperDiv.svg" alt="Paper">
	// </div><div class="blackbox" style="display: none;"></div><div class="result-display" style="display: flex;">
	// <h2>You won</h2><button>Play Again</button>
	// </div><div style="transform: scale(1.5);"><img src="./my_images/rockDiv.svg" alt="Rock"></div></div>


	setTimeout(() => {
		displayResult.style.display = 'flex';
		secondScreen.style.marginLeft = '200px';
		secondScreen.style.width = '936px';
		whoPickedWhat.style.marginLeft = '235px';
		whoPickedWhat.style.width = '870px';
	}, 1500)
		
}

scissorsDiv.addEventListener('click', () => {
	resetGame();
	gameDiv.style.display = 'none';
	whoPickedWhat.style.display = 'flex';
	secondScreen.style.display = 'flex';
	generateScissorsDiv();

	// New Additions
	const blackboxDiv = document.createElement('div');
	blackboxDiv.className = 'blackbox';
	secondScreen.appendChild(blackboxDiv);

	setTimeout(() => {
		blackboxDiv.style.display = "none";
	}, 500)

	const displayResult = document.createElement('div');
	displayResult.className = 'result-display';
	let h2 = document.createElement('h2');
	h2.innerHTML = '';
	
	displayButton.textContent = 'Play Again';
	displayResult.appendChild(h2);
	displayResult.appendChild(displayButton);
	secondScreen.appendChild(displayResult);

	setTimeout(() => {
	 	const result = generateComputerDiv();
		if (result === 'paper') {
			h2.innerHTML = 'You won';
			score.innerHTML = ++initialScore;
			secondScreen.firstChild.classList.add('ripple-effect');
		} else if (result === 'rock') {
			h2.innerHTML = 'You lost';
			score.innerHTML = --initialScore;
			secondScreen.lastChild.classList.add('ripple-effect');
		} else {
			h2.innerHTML = 'There is a tie';
		}
	}, 1000)
	
	setTimeout(() => {
		displayResult.style.display = 'flex';
		secondScreen.style.marginLeft = '200px';
		secondScreen.style.width = '936px';
		whoPickedWhat.style.marginLeft = '235px';
		whoPickedWhat.style.width = '870px';
	}, 1500);

});

rockDiv.addEventListener('click', () => {
	resetGame(); 
	gameDiv.style.display = 'none';
	whoPickedWhat.style.display = 'flex';
	secondScreen.style.display = 'flex';
	generateRockDiv();

	const blackboxDiv = document.createElement('div');
	blackboxDiv.className = 'blackbox';
	secondScreen.appendChild(blackboxDiv);

	setTimeout(() => {
		blackboxDiv.style.display = "none";
	}, 500)

	const displayResult = document.createElement('div');
	displayResult.className = 'result-display';
	let h2 = document.createElement('h2');
	h2.innerHTML = '';
	
	displayButton.textContent = 'Play Again';
	displayResult.appendChild(h2);
	displayResult.appendChild(displayButton);
	secondScreen.appendChild(displayResult);

	setTimeout(() => {
		const result = generateComputerDiv();
		if (result === 'scissors') {
			h2.innerHTML = 'You won';
			secondScreen.firstChild.classList.add('ripple-effect');
			score.innerHTML = ++initialScore;
		} else if (result === 'paper') {
			h2.innerHTML = 'You lost';
			score.innerHTML = --initialScore;
			secondScreen.lastChild.classList.add('ripple-effect');
		} else {
			h2.innerHTML = 'There is a tie';
		}
	}, 1000);

	setTimeout(() => {
		displayResult.style.display = 'flex';
		secondScreen.style.marginLeft = '200px';
		secondScreen.style.width = '936px';
		whoPickedWhat.style.marginLeft = '235px';
		whoPickedWhat.style.width = '870px';
	}, 1500);
	
});

displayButton.addEventListener('click', () => {
	console.log("Display Button has been clicked");
	secondScreen.style.display = 'none';
	whoPickedWhat.style.display = 'none';
	gameDiv.style.display = 'block';

	// Revert all these styles back to their previous shapes
	secondScreen.style.marginLeft = '385px';
	secondScreen.style.width = '622px';
	whoPickedWhat.style.marginLeft = '421px';
	whoPickedWhat.style.width = '550px';
});

// rules.addEventListener('click', () => {
// 	console.log("I have been clicked");

// 	const rulesImage = document.createElement('img');
// 	rulesImage.src = './images/image-rules.svg';
// 	rulesImage.alt = 'Rules';
// 	rulesImage.className = 'rules-image';
// 	rules.appendChild(rulesImage);
// })

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
	const paperImg = document.createElement('img');
	paperImg.src = './my_images/paperDiv.svg';
	paperImg.alt = 'Paper';
	paperDiv.appendChild(paperImg);

	secondScreen.appendChild(paperDiv);
	paperDiv.style.transform = 'scale(1.5)'

}

function generateScissorsDiv() {
	// Generate scissorsDiv
	const scissorsDiv = document.createElement('div');
	const scissorsImg = document.createElement('img');
	scissorsImg.src = './my_images/scissorsDiv.svg';
	scissorsImg.alt = 'Scissors';
	scissorsDiv.appendChild(scissorsImg);
	
	scissorsDiv.classList.add('smaller');
	secondScreen.appendChild(scissorsDiv);
	scissorsDiv.style.transform = 'scale(1.5)'
	
}

function generateRockDiv() {
	// Generate rockDiv
	const rockDiv = document.createElement('div');
	const rockImg = document.createElement('img');
	rockImg.src = './my_images/rockDiv.svg';
	rockImg.alt = 'Rock';
	rockDiv.appendChild(rockImg);

	secondScreen.appendChild(rockDiv);
	
	rockDiv.style.transform = 'scale(1.5)'
}

function resetGame() {
	// Remove the paperDiv, scissorsDiv, and rockDiv from the secondScreen
	while (secondScreen.firstChild) {
	  secondScreen.removeChild(secondScreen.firstChild);
	}
  }
  


