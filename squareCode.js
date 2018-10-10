
function squareCode(originalPhrase){
  if(originalPhrase.length > 81){
    return "Your string is longer than 81 characters. Please input a shorter phrase."
  }
  var inputStringAsArray = originalPhrase.split("");
// take the originalPhrase and find the square root or closest thing to it and that will be your first string length
  var newLineLength = Math.floor(Math.sqrt(originalPhrase.length));
  // arrange the total input into lines of a certain size (use /n) to create new lines
  var ourNewArray = [];

  for (var i = 0; i < inputStringAsArray.length; i++){
    var newElement = "";
    if((i + 1) % newLineLength === 0){
      newElement += inputStringAsArray[i];
      ourNewArray.push(newElement);
      // newElement = "";
    } else {
      newElement += inputStringAsArray[i];
    }
  return ourNewArray;
  }
 console.log(ourNewArray);
}

squareCode("mynameisastringandIam5jklfds");

// In your program, have the user enter a message in english with no spaces between
// the words. Have the maximum message length be 81 characters. Display the encoded message.
// (Watch out that no "garbage" characters are printed.) Here are some more examples: