// if I was to refactor this I could put each function into a larger switch statement

var makeCase = function(string, type) {

  var newString = "";
  var type = type.toString(); // this allows us to grab the length
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
    var input = input.split(' ');
      input.forEach(function(item){
        newString += capitalizeWords(item);
    });
    return newString;
  }

  function camelCase(input) {
    var input = input.split(' ');
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
      var input = input.split(' ');
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

  if (Array.isArray(type.split(",")) === true) {
    type.split(",").forEach(function(item, index){
      console.log(item);
      // send each of the strings
      if (index === 0){
        } else {
        var string = newString;
      }
            switch (item) { // our strings are undefined
        case "camel":
           newString += camelCase(string);
        case "pascal":
           newString += pascalCase(string);
        case "snake":
            newString += snakeWords(string);
        case "kebab":
           newString += kebabWords(string);
        case "title":
          newString += titleCase(string);
        case "vowel":
          newString += capitalizeVowels(string);
        case "consonant":
          newString += capitalizeConsonants(string);
        case "upper":
          newString += upperCase(string);
        case "lower":
          newString += lowerCase(string);
        default:
           console.log('not type matched');
      }
    })
  }

  // if there's an array we will need to run through our
  //switch case twice and then print it our after.

  //   switch (type) {
  //     case "camel":
  //        return camelCase(string);
  //     case "pascal":
  //        return pascalCase(string);
  //     case "snake":
  //         return snakeWords(string);
  //     case "kebab":
  //       return kebabWords(string);
  //     case "title":
  //       return titleCase(string);
  //     case "vowel":
  //       return capitalizeVowels(string);
  //     case "consonant":
  //       return capitalizeConsonants(string);
  //     case "upper":
  //       return upperCase(string);
  //     case "lower":
  //       return lowerCase(string);
  //     default:
  //        console.log('not type matched');
  //   }
  return console.log(newString);
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));