function functionName() {} // The code goes between the curly brackets 



// challenge one
function main(){
    putBeeper();
    diagonal();
    
    
 }
 
 function lMove(){
    move();
    turnLeft();
    move();
    turnRight();
    }
    
 function diagonal(){
    lMove();
    putBeeper();
    lMove();
    putBeeper();
    lMove();
    putBeeper();
    lMove();
    putBeeper();
    
    
    }

//challenge 2

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + Math.floor(money/1.5) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

    