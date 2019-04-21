var currentScore = 0
var wins = 0
var losses = 0
var generateRN = 0
var targetNum = 0

//create reset round function
//get wins and losses to display without removing text 

$("#purpleC").on("click", function () {
    currentScore += parseInt($(this).val());
    $("#currentScore").text(currentScore)
checkWin()
})

$("#blueC").on("click", function () {
    currentScore += parseInt($(this).val());
    $("#currentScore").text(currentScore) 
checkWin()
})

$("#orangeC").on("click", function () {
    currentScore += parseInt($(this).val());
    $("#currentScore").text(currentScore)   
checkWin() 
})

$("#yellowC").on("click", function () {
    currentScore += parseInt($(this).val());
    $("#currentScore").text(currentScore)   
checkWin() 
})

$("#purpleC").val(getRandomNumber(1,12))
$("#blueC").val(getRandomNumber(1,12))
$("#orangeC").val(getRandomNumber(1,12))
$("#yellowC").val(getRandomNumber(1,12))


function getRandomNumber (lower,upper) {
                                // (0-101) + 19 = (19 - 120) 
    generateRN = Math.floor(Math.random() * (upper-lower+1))+lower;
    return generateRN;
}

function getTargetNumber (){
    targetNum = Math.floor(Math.random() * 101) + 19
    return targetNum
}
$("#randomNumberBetween19and120").text(getTargetNumber())
console.log(currentScore)
console.log (targetNum)

function checkWin(){
    console.log(currentScore, targetNum)
    if (currentScore === targetNum) {
        alert("You win! Way to go!"); 
        wins++
        $("#wins").text("Wins: " + wins)
        $("#currentScore").text(currentScore) 
        startGame()  
 
    } else if (currentScore > targetNum) {
         alert ("You lost, better luck next time!")
         losses++
         $("#losses").text("Losses: " + losses)
        startGame()
}}
// var winsText = document.getElementById("wins");
// var lossesText = document.getElementById("losses");
// winsText.textContent = "wins: " + wins;
// lossesText.textContent = "losses: " + losses;

function startGame() {
    $("#randomNumberBetween19and120").text(getTargetNumber())
    currentScore = 0
    $("#currentScore").text(currentScore)
    $("#purpleC").val(getRandomNumber(1,12))
    $("#blueC").val(getRandomNumber(1,12))
    $("#orangeC").val(getRandomNumber(1,12))
    $("#yellowC").val(getRandomNumber(1,12))

    
}