
//personal solution
var beer = 99
function beerOnTheWall(){
    while (beer>0){
        console.log(beer + "bottles of beer on the wall, " + beer +"bottles of beer , Take one down and pass it around, " + (beer -1) + " bottles of beer on the wall");
        beer--
    }
    
}

//instructor solution
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}