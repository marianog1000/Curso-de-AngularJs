
angular.module("app", [])
	.controller("firstController", first)
	.controller("secondController", second)
	.controller("thirdController", third)
	.controller("firstControllerObj", firstObj)
	.controller("secondControllerObj", secondObj)
	.controller("thirdControllerObj", thirdObj);
	
	
	function first($scope) {
		$scope.firstName = "John";
	};
	function second($scope) {
		$scope.lastName = "Doe";

		$scope.getFullName = function() {
			return $scope.firstName + " " + $scope.lastName;
		}
	};
	function third($scope) {
		$scope.middleName = "Al";
		$scope.lastName = "Smith";

		$scope.getFullName = function() {
			return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
		}
	};

	function firstObj($scope) {
		$scope.firstModelObj = {
			firstName : "John"
		}		
	};
	function secondObj($scope) {
		$scope.secondModelObj = {
			lastName : "Doe"
		}
		$scope.getFullName = function() {
			return $scope.firstModelObj.firstName + " " + $scope.secondModelObj.lastName;
		}
	};
	function thirdObj($scope) {
		$scope.thirdModelObj = {
			middleName : "Al",
			lastName : "Smith"
		}
		$scope.getFullName = function() {
			return $scope.firstModelObj.firstName + " " + $scope.thirdModelObj.middleName + 
				" " + $scope.thirdModelObj.lastName;
		}		
	}
	
