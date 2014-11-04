(function() {
	'use strict';

	angular
		.module('app', [
			'ngRoute'
		])
		.config(config);

	function config($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/date.select.html',
			controller: 'MainController',
			controllerAs: 'vm'
		})
	}

})();