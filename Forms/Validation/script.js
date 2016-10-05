
angular.module("mainModule", [])
	.controller("mainController", function($scope) {

		$scope.person = {
			firstName : null,
			lastName : null
		};
		
		$scope.getItemState = function(item){
			if(item.$valid)
				return "valid";
			else if (item.$invalid)
				return "invalid";
			else
				return "";		
		};
		
		$scope.getItemError = function(item){
			if (item.$invalid)
				return item.$error;
			else 
				return null;
		};
		
		$scope.getValidationCSSClass = function(item){
			return {
				invalidItem : item.$invalid && item.$dirty
			};
		};
		
		$scope.getValidationError = function(item){
			if (item.$dirty && item.$error.required)
				return "required field";
			else 
				return "";
		};
	});
