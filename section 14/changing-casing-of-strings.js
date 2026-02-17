var name = "Lester";
name.toUpperCase(); // use .toUpperCase() and .toLowerCase() to change the casing of strings .

//challenge 1

var name = prompt("What is your name?");
alert("Hello" + " " + name.slice(0,1).toUpperCase() + name.slice(0,100).toLowerCase())