// why was this not working with a for loop but worked with a forEach loop
// my output is correct but is slightly different than the example in the instructions.
// this would be due to line 11 which dictates the length of the lines.

function squareCode(originalPhrase){
  if(originalPhrase.length > 81){
    return console.log("Your string is longer than 81 characters. Please input a shorter phrase.");
  }
  var inputStringAsArray = originalPhrase.split("");
// take the originalPhrase and find the square root or closest thing to it and that will be your first string length
  var newLineLength = Math.floor(Math.sqrt(originalPhrase.length));
  // arrange the total input into lines of a certain size (use /n) to create new lines

  var ourNewArray = [];
  var newElement = "";
 // here we are running through the array sequentially
  inputStringAsArray.forEach(function(item, index){
    if((index + 1) % newLineLength === 0){
        newElement += item;
        ourNewArray.push(newElement);
        newElement = "";
      } else if ((index + 1) === originalPhrase.length){
        newElement += item;
        ourNewArray.push(newElement);
      } else {
        newElement += item;
    }
  })

  var secondNewArray = [];
  var secondNewElement = "";

// this loops through ourNewArray first pushing each character of the item[0] to a new element within secondNewArray
// then the second if statment loops through the following characters of each elements sending them to the correct element in the new array
  ourNewArray.forEach(function(item, index){
    if (index === 0){
    for (var i = 0; i < item.length; i++) {
        secondNewArray.push(item[i]);
      }
    }
    if (index > 0){
      for (var j = 0; j < item.length; j++) {
        secondNewArray[j] += item[j];
        }
      }
    })

  var codeIntoString = secondNewArray.toString();
  var finalCode = codeIntoString.replace(/,/g," ");
  return console.log(finalCode);
}

squareCode("Ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots");