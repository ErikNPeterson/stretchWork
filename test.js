// why was this not working with a for loop but worked with a forEach loop

function squareCode(originalPhrase){
  if(originalPhrase.length > 81){
    return "Your string is longer than 81 characters. Please input a shorter phrase."
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
 // here we need to run through the array
 // first letter in each string of ourNewArray; then second; third etc...
 //[ 'mynam', 'eisas', 'tring', 'andIa', 'm5jkl', 'fds' ]

  ourNewArray.forEach(function(item, index){
    if (index === 0){
    for (var i = 0; i < item.length; i++) { // 'mynam'
        secondNewArray.push(item[i]); // after this is done we should have an array of 5 separate characters secondNewArray = [m,y,n,a,m];
      }
    }
    if (index > 0){
      for (var j = 0; j < item.length; j++) {
        secondNewArray[j] += item[j];
        }
      }
    })

    // now we need to loop through the second element
    //sending the letter += to the secondNewArray[0]+=
    return console.log(secondNewArray);
}
// now we have to loop through our new array creating another new array
// when we loop through each array
// add  to new secondNewArray[0][0] += first array[i][1]


squareCode("chillout");