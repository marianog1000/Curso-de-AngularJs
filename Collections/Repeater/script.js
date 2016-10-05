
angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.areAllPeopleSelected = false;

		$scope.people = [
			{ firstName: "John", lastName: "Doe" },
			{ firstName: "Bob", lastName: "Smith" },
			{ firstName: "Jack", lastName: "White" },
			{ firstName: "Michael", lastName: "Green" }
		];

		$scope.selectablePeople = [
			{ firstName: "John", lastName: "Doe", isSelected: false },
			{ firstName: "Bob", lastName: "Smith", isSelected: false },
			{ firstName: "Jack", lastName: "White", isSelected: false },
			{ firstName: "Michael", lastName: "Green", isSelected: false }
		];

		$scope.stringArray = [];
		var currStringIndex = 0;

		/*$scope.updatePeopleSelection = function(peopleArray, selectionValue) {
			for (var i = 0; i < peopleArray.length; i++) {
				peopleArray[i].isSelected = selectionValue;
			}
		}*/

		$scope.updatePeopleSelection = function(selectionValue) {
			for (var i = 0; i < $scope.selectablePeople.length; i++) {
				$scope.selectablePeople[i].isSelected = selectionValue;
			}
		}

		$scope.getPersonPositionDesc = function(isFirst, isMiddle, isLast, isEven, isOdd) {
			var result = "";
			if (isFirst)
				result = "(first";
			else if (isMiddle)
				result = "(middle";
			else if (isLast)
				result = "(last";

			if (isEven)
				result += "-Even)";
			else if (isOdd)
				result += "-Odd)";

			return result;
		}

		$scope.addStringToArray = function() {
			$scope.stringArray.push("Item " + currStringIndex);
			currStringIndex++;
		}

		$scope.removeStringFromArray = function(stringIndex) {
			if (stringIndex >= 0 && stringIndex < $scope.stringArray.length)
				$scope.stringArray.splice(stringIndex, 1);
		};
	});