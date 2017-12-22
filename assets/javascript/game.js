var wins = 0;
var losses = 0; 
var computerNumber;
var counter;

function startGame() {

var counter = 0;
$(".your-total-score").text(counter);

computerNumber = Math.floor(Math.random() * 101) + 19;
$(".number-to-match").text(computerNumber);

$(".crystal-image").each(function() {
$(this).attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1)

});

}
startGame();

var counter = 0;

crystals = ["assets/images/yellow.png", "assets/images/blue.png", "assets/images/green.png", "assets/images/purple.png"]

for (var i = 0; i < crystals.length; i++) {

    var imageCrystal = $("<img>");
    
imageCrystal.addClass("crystal-image");

imageCrystal.attr("src", crystals[i]);

imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);

$("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
console.log(crystalValue);

     counter += crystalValue;

$(".your-total-score").text(counter);

if (counter === computerNumber) {
    wins++
    $("#wins").text(wins);
    $("#status").text("You rock!");
    counter = 0;
    crystalValue = 0;
    startGame(); 
}

else if (counter >= computerNumber) {
    losses++
    $("#losses").text(losses);
    $("#status").text("You suck :) !");
    counter = 0;
    crystalValue = 0;
    startGame();  
}

});