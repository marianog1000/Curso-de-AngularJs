
angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.onKeyDownResult = "";
		$scope.onKeyUpResult = "";
		$scope.onKeyPressResult = "";

		var getKeyBoardEventResult = function(keyEvent, KeyEventDesc) {
			return KeyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
		};

		$scope.onKeyDown = function($event) {
			$scope.onKeyDownResult = getKeyBoardEventResult($event, "Key Down");
		};

		$scope.onKeyUp = function($event) {
			$scope.onKeyUpResult = getKeyBoardEventResult($event, "Key Up");
		};

		$scope.onKeyPress = function($event) {
			$scope.onKeyPressResult = getKeyBoardEventResult($event, "Key Press");
		};


	})
	