
var makeCase = function(string, type) {
  var newStringAsArray = string.split(' ');
  var newString = "";

  if (type === "camel") {
    camelCase(newStringAsArray);
    } else if (type === "pascal") {
    pascalCase(newStringAsArray);
    }
  }

  // } else if (type === "snake") {

  // } else if (type === "kebab") {

  // } else if (type === "title") {

  // } else if (type === "vowel") {

  // } else if (type === "consonant") {

  // }

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


    return newString;
};

makeCase("this is a string", "camel") === "thisIsAString";
makeCase("this is a string", "pascal") === "ThisIsAString";
makeCase("this is a string", "snake") === "this_is_a_string";
makeCase("this is a string", "kebab") === "this-is-a-string";
makeCase("this is a string", "title") === "This Is A String";
makeCase("this is a string", "vowel") === "thIs Is A strIng";
makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";







// precedence list
// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower
