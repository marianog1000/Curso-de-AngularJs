
var PersonManager = function(person) {
	var personInstance = person;
	return {
		getPersonFirstName: function() {
			return personInstance.firstName;
		},
		getPersonLastName: function() {
			return personInstance.lastName;
		},
		getPersonFullName: function(separator) {
			return personInstance.firstName + separator + personInstance.lastName;
		}
	};
};

angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: ""
	})
	.factory("personManager", PersonManager)
	.controller("mainController", function($scope, person, personManager) {
		person.firstName = "John";
		person.lastName = "Doe";

		$scope.personInstance = person;
		$scope.personManagerInstance = personManager;
	}); 
	