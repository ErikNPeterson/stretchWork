var calculateChange = function(total, cash) {
  // create an object to pass new key value pairs into
  let change = {};
  // evaluate the amount of change
  let totalLeft = cash - total;

  const addChangeToObject = (billName, billValue) => { // something like this so you can use the same function for every call
    if( (totalLeft / billValue) > 1 ) { // Twenty Dollar Bills
       howMany = Math.floor(totalLeft / billValue); // this works
       change[billName] = howMany;
       totalLeft = totalLeft - (howMany * billValue);  // something weird is happening here
    }
  }
//  I changed to => arrow function so it runs in same context as paraent and will update totalLeft
  addChangeToObject('Twenty Dollars', 2000);
  addChangeToObject('Ten Dollars', 1000);
  addChangeToObject('Five Dollars', 500);
  addChangeToObject('Two Dollars', 200);
  addChangeToObject('One Dollar', 100);
  addChangeToObject('Quarter 25¢', 25);
  addChangeToObject('Dime 10¢', 10);
  addChangeToObject('Nickel 5¢', 5);
  addChangeToObject('Penny 1¢', 1);

return change;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
