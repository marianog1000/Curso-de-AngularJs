
angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.person = {};

		$scope.validarCss = function(item) {
			if (!item.$valid)
				return "rojo";
			else
				return "normal";
		};
	});
