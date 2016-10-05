
var PersonManager = function() {
	var fullNameSeparator=" ";

	return {
		setFullNameSeparator : function(separator){
			fullNameSeparator = separator;
		},	
	
		$get: function(person) {
			return {
				getPersonFirstName: function() {
					return person.firstName;
				},
				getPersonLastName: function() {
					return person.lastName;
				},
				getPersonFullName: function(separator) {
					return person.firstName + separator + person.lastName;
				}
			};
		}
	};
};

angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: ""
	})
	.provider("personManager", PersonManager)
	.config(function(personManagerProvider) {
		personManagerProvider.setFullNameSeparator(" * ");
	})
	.run(function(person) {
		person.firstName = "John";
		person.lastName = "Doe";
	})
	.controller("mainController", function($scope, person, personManager) {

		$scope.personInstance = person;
		$scope.personManagerInstance = personManager;
	}); 
	