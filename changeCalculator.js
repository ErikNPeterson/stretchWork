var calculateChange = function(total, cash) {
  // create an object to pass new key value pairs into
  var change = {};
  // evaluate the amount of change
  const cashReturn = cash - total;
  //create an if statement that loops through our number that adds new Key value pairs to our object
  // var cashInString = cashReturn.toString(10); // is this correct ??? the radix
  // var length = cashInString.length;
  // var cashInArray = cashInString.split("");

 var addChangeToObject = function(){
    var totalLeft = 0 ;
      if( (cashReturn / 2000) > 1 ) {
         howMany = Math.floor(cashReturn / 2000);
         change['Twenty dollars'[howMany]];
         totalLeft += cashReturn - howMany;
         console.log(totalLeft); // I'm getting some weird error with totalLeft
      }
    }

addChangeToObject();

    // think about calculating the amount of each change like
    //  5000
    // 5000 pennies
    // 2.5 twenty dollar bills
    // 5 ten dollar bills
    // 10 five dollar bills etc..
    // calculate and then use math floor
    // send that number as a value for the key value pair
    // send the left over value into the next largest bill etc
    // when there is nothing left or only zeros return

    // for (var i = 0; i < length - 1; i++) {

    //    }

  // change["Ten dollars"][insert how many here :-)];
  // change["Five dollars"][insert how many here :-)];
  // change["Two dollars"][insert how many here :-)];
  // change["One dollar"][insert how many here :-)];
  // change["Quarter 25¢"][insert how many here :-)];
  // change["Dime 10¢"][insert how many here :-)];
  // change[ "Nickel 5¢")][insert how many here :-)];
  // change[ "Penny 1¢"][insert how many here :-)];

};
// console.log(calculateChange(1000, 7000));
// console.log(calculateChange(2623, 5700));
// console.log(calculateChange(501, 4000));
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));




/*

{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

*/