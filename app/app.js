// VARs
var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

// initialize app
init();

// click reset button
resetButton.addEventListener("click", function(){
    reset();
});

// FUNCTIONS
// initialize buttons and new colors
function init(){
    setupModeButtons();
    setupSquares();
    reset();
};

function setupSquares(){
    // fill the colors in the squares
    for(var i = 0; i < squares.length; i++){
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
            messageDisplay.textContent = "Try Again";
           }
        });
    }
}

function setupModeButtons(){
    colorDisplay.textContent = pickedColor;
    // mode buttons listeners
    for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        // remove both the .selected and add to the one that click
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        // figure out how many square we show
        if(this.textContent === "Normal"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
    });
    }
}

// new game
function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new colors from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = ""; 
    // fill squares with new colors
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
      squares[i].style.backgroundColor = colors[i]; 
    };
    h1.style.backgroundColor = "#D94813";
}

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