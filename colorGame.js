// ================== VARIABLES ======================

var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");
var difficultyLevel = 6;
var reset = document.querySelector("#reset");

var game = {}
game.init = function(){
	setupButtons();
	setupSquares();
	resetGame(5); // difficulty level starts on medium
}
game.init();

// ================== FUNCTIONS ======================

function randomColor(){
	r = Math.floor((Math.random() * 256));	 
	g = Math.floor((Math.random() * 256));	 
	b = Math.floor((Math.random() * 256));	 
	return "rgb("+r+", "+g+", "+b+")";
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr[i] = randomColor();
	}
	return arr;
}

function resetGame(num){
	h1.style.backgroundColor = "#4682b4"; // steelblue
	colorArray = generateRandomColors(num);
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colorArray[i];
	}
	randomNum = Math.floor((Math.random() * num)); // random index to choose the main color
	console.log(randomNum);
	pickedColor = colorArray[randomNum];
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New Colors";
	message.textContent = "";
}

function setVisibleSquares(num){
	for(i=0; i<squares.length; i++){
		squares[i].style.display = "inline";
	}	
	for(i=difficultyLevel; i<squares.length; i++){
		squares[i].style.display = "none";
	}
}

// ================== EVENT LISTENERS ======================

function setupButtons(){
	easyBtn.addEventListener("click", function(){
		difficultyLevel = 3;
		setVisibleSquares(difficultyLevel);
		easyBtn.classList.add("selected");
		mediumBtn.classList.remove("selected");
		hardBtn.classList.remove("selected");		
		resetGame(difficultyLevel);
	});

	mediumBtn.addEventListener("click", function(){
		difficultyLevel = 5;
		setVisibleSquares(difficultyLevel);
		easyBtn.classList.remove("selected");
		mediumBtn.classList.add("selected");
		hardBtn.classList.remove("selected");		
		resetGame(difficultyLevel);
	});

	hardBtn.addEventListener("click", function(){
		difficultyLevel = 7;
		setVisibleSquares(difficultyLevel);
		easyBtn.classList.remove("selected");
		mediumBtn.classList.remove("selected");
		hardBtn.classList.add("selected");		
		resetGame(difficultyLevel);
	});

	reset.addEventListener("click", function(){
		resetGame(difficultyLevel);
	});
}

function setupSquares(){
	for(i=0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				h1.style.backgroundColor = pickedColor;
				for(i=0; i<squares.length; i++){
					squares[i].style.backgroundColor = pickedColor;
					message.textContent = "Correct!";
					reset.textContent = "Play Again?";
				}
			}else{
				this.style.backgroundColor = "#232323";			
				message.textContent = "Try Again!";
			}
		});
	}
}