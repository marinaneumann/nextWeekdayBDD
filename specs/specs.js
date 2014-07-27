describe("dayMonth", function () {
	it("returns the next occurence of the given day", function() {
		dayMonth("friday").should.equal("8/1/2014");
	});

	it("if current day is entered, it returns the date of the week from that day", function () {
		dayMonth("sunday").should.equal("8/3/2014");
	});

});

//spec for weekdays in month
// describe("monthDays", function() {
// it("returns all the dates of the given weekday in the given month", function () {
// 		monthDays("saturday","3").should.eql(["1/3/2014","1/10/2014","1/17/2014","1/24/2014","1/31/2014"]);
// 	});
// });
