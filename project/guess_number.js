var guessedNumber;
var chances = 10;
function guessNumber() {
    guessedNumber = Math.floor(Math.random() * 100 + 1);
    document.getElementById('btn.play').style.display = "none";
    document.getElementById('submitGuess').style.display = "block";
    document.getElementById('guessinput').style.display = "block";

    console.log(guessedNumber);

}

function submitGuess() {
    var userinput = document.getElementById('guessinput').value
    
    if(userinput < 1 || userinput > 100 ){
        alert("Guessed the number between 1 to 100 ")
        return
    }

    chances -=1;

    if (chances == 0){
        alert("Game End! You Lose")
        location.reload();
    }
    else{
        document.getElementById('attempts').innerHTML= "You have left " +chances+ " chances";
    }
    if (userinput == guessedNumber) {
        alert("Your Guess is correct")
        location.reload();
    }
    else if (userinput > guessedNumber){
        alert("Your Guess is Too High")
    }
    else if (userinput < guessedNumber){
        alert("Your Guess is Too Low")
    }
}
