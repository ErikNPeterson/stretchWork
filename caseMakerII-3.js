// if I was to refactor this I could put each function into a larger switch statement

var makeCase = function(string, types) {

  function snakeWords(originalString) {
    return originalString.replace(/ /g, "_");
  }

  function kebabWords(originalString) {
    return originalString.replace(/ /g, "-");
  }

  function capitalizeWords(word){
   return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

  function pascalCase(input) {
    var input = input.split(' ');
    var newString = '';

    input.forEach(function(item){
      newString += capitalizeWords(item);
    });

    return newString;
  }

  function camelCase(input) {
    var input = input.split(' ');
    var newString = '';

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
      var newString = '';

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
      var newString = '';

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
      var newString = '';

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
    return string.toUpperCase();
  }

  function lowerCase(string){
    return string.toLowerCase();
  }

  if (!Array.isArray(types)) {
    types = [types];
  }

  // camel, pascal, snake, kebab, title
  // vowel, consonant
  // upper, lower

  // var tier1 = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  // var tier2 = ['vowel', 'consonant'];
  // var tier3 = ['upper', 'lower'];
  
  var tier1 = [];
  var tier2 = [];
  var tier3 = [];

  types.forEach(currentType => {

    switch (currentType) { // our strings are undefined
      case "camel":
         tier1.push(currentType);
         break;
      case "pascal":
        tier1.push(currentType);
         break;
      case "snake":
          tier1.push(currentType);
          break;
      case "kebab":
         tier1.push(currentType);
         break;
      case "title":
        tier1.push(currentType);
        break;
      case "vowel":
        tier2.push(currentType);
        break;
      case "consonant":
        tier2.push(currentType);
        break;
      case "upper":
        tier3.push(currentType);
        break;
      case "lower":
        tier3.push(currentType);
        break;
      default:
         console.log('not type matched');
    }
  })

  var newArray = tier1.concat(tier2.concat(tier3));

    newArray.forEach(currentType => {

      switch (currentType) { // our strings are undefined
        case "camel":
           string = camelCase(string);
           break;
        case "pascal":
           string = pascalCase(string);
           break;
        case "snake":
            string = snakeWords(string);
            break;
        case "kebab":
           string = kebabWords(string);
           break;
        case "title":
          string = titleCase(string);
          break;
        case "vowel":
          string = capitalizeVowels(string);
          break;
        case "consonant":
          string = capitalizeConsonants(string);
          break;
        case "upper":
          string = upperCase(string);
          break;
        case "lower":
          string = lowerCase(string);
          break;
        default:
           console.log('not type matched');
      }
    })
  
  return string;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));