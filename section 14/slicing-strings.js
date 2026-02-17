var name = "Lester"; 
name.slice(0,3)  // THIS WILL BRING UP Les, the first character is always at postion 0

//challenge 1

var userText = prompt("write something")
alert("You have written" + " " + userText.length + " " +"characters" + ". You have " + (140-userText.length) + " " + "characters left." )
alert(userText.slice(0,140) + " has been sent")