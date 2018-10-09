// I can try making two differnt if statements to determine the precedence??

var makeCase = function(string, type) {

  function snakeWords(originalString) {
    var newString = "";
    for (var i = 0; i < originalString.length; i++) {
      if(originalString[i] === " ") {
        newString += "_";
      } else {
        newString += originalString[i];
      }
    }
    return newString ;
  }

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

    var newStringAsArray = string.split(' ');
    var newString = "";

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
       input.replace(/[bcdfghjklmnpqrstvwxyz]/ig, function (char) // ig = case insensitive
        {
        newString += char.toUpperCase();
        });
       return newString;
      }

  function upperCase(string){
    return string.toUpperCase();
  }

  function lowerCase(string){
    return string.toLowerCase();
  }

      if (type === "camel") {
        camelCase(newStringAsArray);
      } else if (type === "pascal") {
        pascalCase(newStringAsArray);
      } else if (type === "snake"){
        snakeWords(string);
      } else if (type === "kebab"){
        kebabWords(string);
      } else if (type === "title"){
        titleCase(newStringAsArray);
      } else if (type === "vowel"){
        capitalizeVowels(string);
      } else if (type === "consonant"){
        capitalizeConsonants(string);
      }else if (type === "upper"){
        upperCase(string);
      }else if (type === "lower"){
        lowerCase(string);
      }
    }
      return newString;
  }

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));



