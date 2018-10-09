var string = "tHis is a sTring";

var newString = "";

var newStringAsArray = string.split(' ');

function capitalizeWords(word){
 return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

// function capitalizeConsonants(input){
//      input.replace(/[bcdfghjklmnpqrstvwxyz]/ig, function (char) // ig = case insensitive
//       {
//       newString += char.toUpperCase();
//       });
//      return newString;
//     }
    function capitalizeConsonants(input){
     for (var i = 0; i < input.length; i++){
       if ((input[i].toLowerCase() === "a") || (input[i].toLowerCase() === "e") || (input[i].toLowerCase() === "i") || (input[i].toLowerCase() === "o") || (input[i].toLowerCase() === "u")) {
        newString += input[i]
        } else {
        newString += capitalizeWords(input[i]);
        }
      }
      return newString;
  }

console.log(capitalizeConsonants(string));
