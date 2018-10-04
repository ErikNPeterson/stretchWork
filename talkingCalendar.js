// QUESTIONS & Notes!!!
// why was my ordinalIdicator sending two outputs with an if statement ???
// Is there some function that I can use rather than having a whole array ?
// The oridinal indicator will not work accurately in numbers over 100 becausee
// cont... it would would not output 101st or 301st ...fortunately we're dealing with
//cont... two digit numbers


  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

var talkingCalendar = function(date) {
//splitting the string into an array of strings
  var dateArray = date.split("/");
// setting variables for each element
  var nameOfMonth = monthNames[dateArray[1] - 1];
  var year = dateArray[0];
  var day = dateArray[2]
// if the day is only 1 digit... eliminate the 0 in front
  var correctDay = function(){
    if (day.charAt(0) === "0"){
      return day.charAt(1);
      } else {
        return day;
      }
    }

  var ordinalIndicator = function(){
      var ordinal = "";
      if (day.charAt(day.length -1) === "1" && day.charAt(0) === "0" ){
      ordinal += "st";
      } else if (day.charAt(day.length -1) === "2"){
      ordinal += "nd";
      } else if (day.charAt(day.length -1) === "3"){
      ordinal += "rd";
      } else if (day.charAt(day.length - 1) === "0" || "4" || "5" || "6" || "7" || "8" || "9"){
      ordinal += "th";
    }
      return ordinal;
  }

  var newDateOutput = nameOfMonth + " " + correctDay() + ordinalIndicator() + ", " + year ;
  return newDateOutput;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("2017/12/01"));


