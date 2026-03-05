$("h1").css("color","red");

console.log($("h1").css("font-family"))

$("h1").addClass("big-title")

console.log($("h1").attr("style"))


$("h1").click(function(){
    $("h1").css("color", "blue");
})



$("button").click(function(){
    $("h1").css("color", "purple");
})