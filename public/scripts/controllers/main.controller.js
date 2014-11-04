(function() {
	'use strict';

	angular
		.module('app')
		.controller('MainController' , MainController);

	function MainController(MainService){
		var vm = this;

		//show/hide
		vm.showSelected = false;
		vm.finalTime = false;
		vm.availableDates = true;
		//arrays
		vm.showTimesOne = [];
		vm.showTimesTwo = [];
		vm.showTimesThree = [];
		vm.daysToShow = [];
		//functions
		vm.pickedDate = pickedDate;
		vm.finalizedAppoint = finalizedAppoint;
		//values
		vm.selectedDate = '';
		vm.selectedDay = '';


		///////

		var getDays = function(){
			MainService.getDays().then(function(results){

				var dateObjCreate = function(resDate, DateArr){
					for(var i = 0; i < resDate.length; i++){
						var objectToPush = {
							displayTime: '',
							dbTime: ''
						}
						objectToPush.displayTime = resDate[i].slice(11, 16);
						objectToPush.dbTime = resDate[i];
						DateArr.push(objectToPush);
					}
				};

				dateObjCreate(results.dateOne, vm.showTimesOne);
				dateObjCreate(results.dateTwo, vm.showTimesTwo);
				dateObjCreate(results.dateThree, vm.showTimesThree);

				vm.daysToShow = results.dayHeaders;
				console.log(results.dayHeaders);
			});
		};
		getDays();

		function pickedDate(time, day) {
			vm.selectedDate = time;
			vm.selectedDay = day;
			vm.showSelected = true;
		};

		function finalizedAppoint(selectedDate){
			MainService.setDate(selectedDate.dbTime);
			vm.showSelected = false;
			vm.finalTime = true;
			vm.availableDates = false;
		};

	};

})();