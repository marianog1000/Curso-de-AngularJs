
angular.module("mainModule", ["ngLocale"])
	.controller("mainController", function($scope, $locale) {
		$scope.localeId = $locale.id;

		$scope.currentDate = new Date();
	});
