var prompt = require("prompt-sync")();

function startGuessing() {
  var numberOfGuesses = 0;
  var randomNumber = getRandomNumberInclusive();
  var answer = "";
  var guessedNumber = 0;
  var isRightNumber = false;
  var insult = function(){
    if (numberOfGuesses < 10){
      return "stupid ";
    } else if (numberOfGuesses >= 10){
      return "idiotic ";
    }
  }

  while (!isRightNumber) {
    answer = prompt("Please guess the magic number!");

    guessedNumber = Number(answer);

    if(isNaN(answer)) { // NaN is a falsey value so we have to use the isNaN function to get a true response
      console.log("Sorry, that is not a valid number!");
    }
    else {
      console.log("You guessed: " + guessedNumber);
      numberOfGuesses++;

      if (guessedNumber > randomNumber) {
        console.log("Sorry, too high");
      } else if (guessedNumber < randomNumber) {
        console.log("Sorry, too low");
      } else if (guessedNumber === randomNumber) {
        console.log("You finally got it, after " + numberOfGuesses + " tries, you " + insult().repeat(numberOfGuesses - 1) + "person!");
        isRightNumber = true;
      } else {
        console.log("Something unexpected happened. Sorry");
      }
    }
  }
}

function getRandomNumberInclusive() {
  min = Math.ceil(1);
  max = Math.floor(1000); //The maximum is inclusive and the minimum is inclusive
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}


startGuessing();
