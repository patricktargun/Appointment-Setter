// "use strict";

var moment = require('moment');
var datePickService = require('../services/datePick.service');

module.exports.getDate = function(req, res){
	//Create the Blank Available Slots Object
	var availableSlots = {
		dayHeaders: [],
		dateOne: [],
		dateTwo: [],
		dateThree: []
	};

	// Create a function that creates the dates
	var createDates = function(addDays, hour, minute, dateArray){
		var someDate = new Date();
		someDate.setDate(someDate.getDate() + addDays);
		someDate.setHours(hour, minute, 00, 00);
		dateArray.push(someDate);
	}

	//Now we make the dates
	var day = new Date().getDay();
	if(day === 0 || day === 1 || day === 2) {
		availableSlots.dayHeaders.push(moment().add(1, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(2, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(3, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));

		createDates(1, 2, 30, availableSlots.dateOne);
		createDates(1, 3, 00, availableSlots.dateOne);
		createDates(1, 5, 00, availableSlots.dateOne);
		createDates(1, 6, 30, availableSlots.dateOne);
		createDates(1, 7, 00, availableSlots.dateOne);

		createDates(2, 2, 30, availableSlots.dateTwo);
		createDates(2, 3, 00, availableSlots.dateTwo);
		createDates(2, 5, 00, availableSlots.dateTwo);
		createDates(2, 6, 30, availableSlots.dateTwo);
		createDates(2, 7, 00, availableSlots.dateTwo);

		createDates(3, 2, 30, availableSlots.dateThree);
		createDates(3, 3, 00, availableSlots.dateThree);
		createDates(3, 5, 00, availableSlots.dateThree);
		createDates(3, 6, 30, availableSlots.dateThree);
		createDates(3, 7, 00, availableSlots.dateThree);
	};
	if(day === 3) {
		availableSlots.dayHeaders.push(moment().add(1, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(2, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(5, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));

		createDates(1, 2, 30, availableSlots.dateOne);
		createDates(1, 3, 00, availableSlots.dateOne);
		createDates(1, 5, 00, availableSlots.dateOne);
		createDates(1, 6, 30, availableSlots.dateOne);
		createDates(1, 7, 00, availableSlots.dateOne);

		createDates(2, 2, 30, availableSlots.dateTwo);
		createDates(2, 3, 00, availableSlots.dateTwo);
		createDates(2, 5, 00, availableSlots.dateTwo);
		createDates(2, 6, 30, availableSlots.dateTwo);
		createDates(2, 7, 00, availableSlots.dateTwo);

		createDates(5, 2, 30, availableSlots.dateThree);
		createDates(5, 3, 00, availableSlots.dateThree);
		createDates(5, 5, 00, availableSlots.dateThree);
		createDates(5, 6, 30, availableSlots.dateThree);
		createDates(5, 7, 00, availableSlots.dateThree);
	};
	if(day === 4) {
		availableSlots.dayHeaders.push(moment().add(1, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(4, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(5, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));

		createDates(1, 2, 30, availableSlots.dateOne);
		createDates(1, 3, 00, availableSlots.dateOne);
		createDates(1, 5, 00, availableSlots.dateOne);
		createDates(1, 6, 30, availableSlots.dateOne);
		createDates(1, 7, 00, availableSlots.dateOne);

		createDates(4, 2, 30, availableSlots.dateTwo);
		createDates(4, 3, 00, availableSlots.dateTwo);
		createDates(4, 5, 00, availableSlots.dateTwo);
		createDates(4, 6, 30, availableSlots.dateTwo);
		createDates(4, 7, 00, availableSlots.dateTwo);

		createDates(5, 2, 30, availableSlots.dateThree);
		createDates(5, 3, 00, availableSlots.dateThree);
		createDates(5, 5, 00, availableSlots.dateThree);
		createDates(5, 6, 30, availableSlots.dateThree);
		createDates(5, 7, 00, availableSlots.dateThree);

	};
	if(day === 5) {
		availableSlots.dayHeaders.push(moment().add(3, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(4, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(5, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));

		createDates(3, 2, 30, availableSlots.dateOne);
		createDates(3, 3, 00, availableSlots.dateOne);
		createDates(3, 5, 00, availableSlots.dateOne);
		createDates(3, 6, 30, availableSlots.dateOne);
		createDates(3, 7, 00, availableSlots.dateOne);

		createDates(4, 2, 30, availableSlots.dateTwo);
		createDates(4, 3, 00, availableSlots.dateTwo);
		createDates(4, 5, 00, availableSlots.dateTwo);
		createDates(4, 6, 30, availableSlots.dateTwo);
		createDates(4, 7, 00, availableSlots.dateTwo);

		createDates(5, 2, 30, availableSlots.dateThree);
		createDates(5, 3, 00, availableSlots.dateThree);
		createDates(5, 5, 00, availableSlots.dateThree);
		createDates(5, 6, 30, availableSlots.dateThree);
		createDates(5, 7, 00, availableSlots.dateThree);
	};
	if(day === 6) {
		availableSlots.dayHeaders.push(moment().add(2, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(3, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));
		availableSlots.dayHeaders.push(moment().add(5, 'days').format('dddd' + ', ' + 'MMM Do YYYY'));

		createDates(2, 2, 30, availableSlots.dateOne);
		createDates(2, 3, 00, availableSlots.dateOne);
		createDates(2, 5, 00, availableSlots.dateOne);
		createDates(2, 6, 30, availableSlots.dateOne);
		createDates(2, 7, 00, availableSlots.dateOne);

		createDates(3, 2, 30, availableSlots.dateTwo);
		createDates(3, 3, 00, availableSlots.dateTwo);
		createDates(3, 5, 00, availableSlots.dateTwo);
		createDates(3, 6, 30, availableSlots.dateTwo);
		createDates(3, 7, 00, availableSlots.dateTwo);

		createDates(4, 2, 30, availableSlots.dateThree);
		createDates(4, 3, 00, availableSlots.dateThree);
		createDates(4, 5, 00, availableSlots.dateThree);
		createDates(4, 6, 30, availableSlots.dateThree);
		createDates(4, 7, 00, availableSlots.dateThree);
	};


	//Now we find which dates are taken
	var takenDates = [];
	datePickService.findDate()
	.then(function(dates){

		var dateOne = availableSlots.dateOne;
		var dateTwo = availableSlots.dateTwo;
		var dateThree = availableSlots.dateThree;

		//Make arrat if taken dates
		for(var i = 0; i < dates.length; i++){
			takenDates.push(dates[i].applyDate);
		};

		//Splice taken from day one
		for(var j = 0; j < dateOne.length; j++){
			for(var t = 0; t < takenDates.length; t++){
				if(dateOne[j].toJSON() === takenDates[t]){
					dateOne.splice(j, 1);
				}
			}
		};
		//Splice taken from day two
		for(var j = 0; j < dateTwo.length; j++){
			for(var t = 0; t < takenDates.length; t++){
				if(dateTwo[j].toJSON() === takenDates[t]){
					dateTwo.splice(j, 1);
				}
			}
		};
		//Splice taken from day three
		for(var j = 0; j < dateThree.length; j++){
			for(var t = 0; t < takenDates.length; t++){
				if(dateThree[j].toJSON() === takenDates[t]){
					dateThree.splice(j, 1);
				}
			}
		};
		res.status(200).json(availableSlots);
	});

};



module.exports.setDate = function(req, res){
	datePickService.saveDate(req.body)
		.then(function(date){
			res.json(date);
		}).catch(function(err){
			res.status(500).json(err);
		})
};









