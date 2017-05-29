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

// ================== DECLARATIONS ======================

var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var difficultyLevel = 6;
var reset = document.querySelector("#reset");

// ================== EVENT LISTENERS ======================

hardBtn.addEventListener("click", function(){
	squares[4].style.display = "inline";
	squares[5].style.display = "inline";
	hardBtn.className = "selected";
	easyBtn.className = "";
	difficultyLevel = 6;
	resetGame(difficultyLevel);
});

easyBtn.addEventListener("click", function(){
	squares[4].style.display = "none";
	squares[5].style.display = "none";
	easyBtn.className = "selected";
	hardBtn.className = "";
	difficultyLevel = 4;
	resetGame(difficultyLevel);
});

reset.addEventListener("click", function(){
	resetGame(difficultyLevel);
});

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