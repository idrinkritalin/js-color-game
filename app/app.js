// Define vars
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var hardButton = document.getElementById("hard");
var normalButton = document.getElementById("normal");

colorDisplay.textContent = pickedColor;

// Event listener
// normal button
normalButton.addEventListener("click", function(){
    normalButton.classList.add("selected");
    hardButton.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    for(var i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
    }
});
// hard button
hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    normalButton.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
// click reset button
resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new colors from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    // fill squares with new colors
    for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i]; 
    };
    h1.style.backgroundColor = "#D94813";
    messageDisplay.textContent = "";
});

// Randomize the colors in the squares
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
           } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again :-(";
           }
    });
}

// Define some functions
// fill up all the squares
function changeColors(color){
    // loop trought all squares
    for(var i = 0; i < squares.length; i++){
      // change each color to match given color
      squares[i].style.backgroundColor = color; 
    };
};

// pick random color
function pickColor(){
    // math. methods [ random() , floor() ] to randomize a number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

// generate random colors array
function generateRandomColors(num){
  // make an array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++){
    // get random number and push into the array
    arr.push(randomColor());
  }; 
  // return that array
  return arr;    
};

// generate a random color
function randomColor(){
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
