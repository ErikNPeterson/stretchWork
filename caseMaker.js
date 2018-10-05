// I should come back to this and use a for loop rather than a forEach()

var camelCase = function(input) {
  var newStringAsArray = input.split(' ');

  var newString = "";

  function capitalizeWords(word){
   return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

      newStringAsArray.forEach(function(item, index){
        if(index === 0) {
          newString += item;
        } else {
          newString += capitalizeWords(item);
        }
    });
    return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious