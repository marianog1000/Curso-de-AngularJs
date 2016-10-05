
angular.module("mainModule", [])
	.controller("mainController", function($scope) {

		$scope.onEditChangeResult = "";
		$scope.onCheckBoxChangeResult = "";
		$scope.onEditNoModelChangeResult = "";

		$scope.onEditChange = function() {
			$scope.onEditChangeResult = "The value is '" + $scope.editValue + "' ";
		}

		$scope.onCheckBoxChange = function() {
			$scope.onCheckBoxChangeResult = "Check1 is " + ($scope.check1Selected ? "SELECTED" : "NOT SELECTED" )+
				", Check2 is " + ($scope.check2Selected ? "SELECTED" : "NOT SELECTED");
		}

		$scope.EditNoModelChange = function() {
			$scope.onEditNoModelChangeResult = "CHANGED";
		}
	})
	