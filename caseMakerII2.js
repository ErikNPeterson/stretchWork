// if I was to refactor this I could put each function into a larger switch statement
// what about putting a loop on type ?? so that the
var makeCase = function(string, type) {

  var newStringAsArray = string.split(' ');
  var newString = "";
  var type = type.toString();
  var string = string;

  function snakeWords(originalString) {
    newString += originalString.replace(/ /g, "_");
    return newString;
  }

  function kebabWords(originalString) {
    newString += originalString.replace(/ /g, "-");
    return newString;
  }

  function capitalizeWords(word){
   return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

  function pascalCase(input) {
    input.forEach(function(item){
      newString += capitalizeWords(item);
    });
    return newString;
  }

  function camelCase(input) {
        input.forEach(function(item, index){
          if(index === 0) {
            newString += item;
          } else {
            newString += capitalizeWords(item);
          }
      });
      return newString;
  }

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

    switch (type) {
      case "camel":
         return camelCase(newStringAsArray);
      case "pascal":
         return pascalCase(newStringAsArray);
      case "snake":
          return snakeWords(string);
      case "kebab":
        return kebabWords(string);
      case "title":
        return titleCase(newStringAsArray);
      case "vowel":
        return capitalizeVowels(string);
      case "consonant":
        return capitalizeConsonants(string);
      case "upper":
        return capitalizeConsonants(string);
      case "lower":
        return lowerCase(string);
      default:
         console.log('not type matched');
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