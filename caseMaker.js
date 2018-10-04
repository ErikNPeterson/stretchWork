
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
    console.log(newString);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious