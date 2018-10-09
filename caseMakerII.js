// I can try making two differnt if statements to determine the precedence??

var makeCase = function(string, type) {

    var newStringAsArray = string.split(' ');
    var newString = "";
    var type = type.toString();
    var string = string;


  // function snakeWords(originalString) { // have a look at replace() https://www.w3schools.com/jsref/jsref_replace.asp ALSO .split() .join()
  //   var newString = "";
  //   for (var i = 0; i < originalString.length; i++) {
  //     if(originalString[i] === " ") {
  //       newString += "_";
  //     } else {
  //       newString += originalString[i];
  //     }
  //   }
  //   return newString ;
  // }

  function kebabWords(originalString) {
    var newString = "";
    for (var i = 0; i < originalString.length; i++) {
      if(originalString[i] === " ") {
        newString += "-";
      } else {
        newString += originalString[i];
      }
    }
    return newString ;
  }

  // below are the functions that manipulate the words.

  function capitalizeWords(word){
   return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

  function pascalCase(input) {
    input.forEach(function(item){
      newString += capitalizeWords(item);
  });

  function camelCase(input) {
        input.forEach(function(item, index){
          if(index === 0) {
            newString += item;
          } else {
            newString += capitalizeWords(item);
          }
      });

  function titleCase(input) {
        input.forEach(function(item, index){
          if(index === input.length - 1) {
            newString += capitalizeWords(item);
          } else {
            newString += capitalizeWords(item) + " ";
          }
      });
        return newString;
    }

    function capitalizeVowels(input){
     for (var i = 0; i < input.length; i++){
       if ((input[i].toLowerCase() === "a") || (input[i].toLowerCase() === "e") || (input[i].toLowerCase() === "i") || (input[i].toLowerCase() === "o") || (input[i].toLowerCase() === "u")) {
        newString += capitalizeWords(input[i]);
        } else {
        newString += input[i]
        }
      }
      return newString;
  }

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

  function upperCase(string){
    newString += string.toUpperCase();
    return newString;
  }

  function lowerCase(string){
    newString += string.toLowerCase();
    return newString;
  }
function whichType(){
      if (type === "camel") {
        camelCase(newStringAsArray);
      }
      if (type === "pascal") {
        pascalCase(newStringAsArray);
      }
      if (type === "snake"){
        snakeWords(string);
      }
      if (type === "kebab"){
        kebabWords(string);
      }
      if (type === "title"){
        titleCase(newStringAsArray);
      }
      if (type === "vowel"){
        capitalizeVowels(string);
      }
      if (type === "consonant"){
        capitalizeConsonants(string);
      }
      if (type === "upper"){
        upperCase(string);
      }
      if (type === "lower"){
        lowerCase(string);
      }
      console.log(newString);
    }
    whichType();
  }
}
// console.log(newString);
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));



