var prompt = require("prompt-sync")();

function getRandomNumberInclusive() {
    min = Math.ceil(1);
    max = Math.floor(1000); //The maximum is inclusive and the minimum is inclusive
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

var numberOfGuesses = 0;
var randomNumber = getRandomNumberInclusive();


function isItTheRightNumber(userinput, magicNumber) {
  if(isNaN(userinput)){ // NaN is a falsey value so we have to use the isNaN function to get a true response
    return "Sorry, that is not a valid number!";
  };
  numberOfGuesses += 1;
    if (userinput > magicNumber){
      return "Sorry! That number is too high";
    } else if (userinput < magicNumber){
      return "Sorry! That number is too low";
    } else if (userinput === magicNumber){
      return "Well you finally got it! After " + numberOfGuesses + " tries!";

    }
}

var answer = "";

while (answer !== randomNumber){
  answer = prompt("Please guess the magic number!");
  console.log("You guessed: " + answer);
  answer = Number(answer);
  console.log(isItTheRightNumber(answer, randomNumber));
}





