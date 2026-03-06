// alert("the game is loaded")
const gamePattern = [];

const buttonColors = ["red","blue","green","yellow"];

function nextSequence(){
   var randomNumber = Math.floor((Math.random()*4));
    return randomNumber
}

var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor)