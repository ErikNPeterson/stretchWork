var string = "tHis is a sTring";

var newString = "";

var newStringAsArray = string.split(' ');

// function capitalizeWords(word){
//  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
// }

// function capitalizeConsonants(input){
//      input.replace(/[bcdfghjklmnpqrstvwxyz]/ig, function (char) // ig = case insensitive
//       {
//       newString += char.toUpperCase();
//       });
//      return newString;
//     }

function upperCase(string){
  return string.toUpperCase();
}

function lowerCase(string){
  return string.toLowerCase();
}


console.log(upperCase(string), lowerCase(string));
