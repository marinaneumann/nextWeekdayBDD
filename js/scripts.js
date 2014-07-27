var dayMonth = function(day) {
	var today = new Date();
	var todayDay = today.getDay();
	var todayDate = today.getDate();
	var todayMonth = today.getMonth();
	var inputtedDay = day.toLowerCase();
	var dayList =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
	var monthDays =[31,28,31,30,31,30,31,31,30,31,30,31];
	var  finalDay = dayList.indexOf(inputtedDay); // returns 0-6 for position of day
	var newdate = "";
	if (finalDay === todayDay) { //if same position numbers, then just add 7 to get the next occurence
		newdate = todayDate + 7;
	}else if (finalDay < todayDay) {
		var diff = finalDay - todayDay;
		var nextDay = 7 + diff;
		newdate = todayDate + nextDay;
	}else {
		// finalDay > todayDay
		var add = finalDay - todayDay;
		newdate = todayDate + add;
	};
	var totalmonthDays = monthDays[todayMonth]
		todayMonth++;
	if (newdate > totalmonthDays) {
		newdate = newdate - totalmonthDays;
		todayMonth++;
	};
	return(todayMonth  + "/" + newdate + "/2014");
};
dayMonth("saturday");



$(document).ready(function() {
	$("form#nextOccurence").submit(function(event) {
		event.preventDefault();
		var userInput =$("input#inputtedweekDay").val();
		$("span#weekdayInput").text(userInput);
		$("span#occurence").text(dayMonth(userInput));
		$("#result").show();
	});
});

//Outline for Weekdays in month
//var dayMonth = function(day) {
// var inputtedMonth = month.toLowerCase();//Turns input to lowercase to match array values
// 	var inputtedDay = day.toLowerCase();
// 	var monthList = ["january","febuary","march","april","may","june","july","august","september","october","november","december"];
// 	// var dayList =["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
// 	var monthDays =[31,28,31,30,31,30,31,31,30,31,30,31];
// 	var currentdayMonths = (monthList[i] === monthDays[i]);
// 	var newDay = [];
// 	for  (inputtedMonth = monthList; inputtedDay + 7 <= currentdayMonths; i++) {
// 		if (  newday = inputtedDay + 7 <= currentdayMonths) {
// 			return newday;
// 		}
// 		return newday;
// 	}
// 	return dayMonth("january","3")
