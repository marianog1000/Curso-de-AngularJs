
angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: "",

		getFullName: function() {
			return this.firstName + " " + this.lastName;
		}
	})
	.controller("simpleController", function($scope, person) {
		var vm = $scope;
		person.firstName = "John";
		person.lastName = "Doe";

		// set a variable on the scope to reference the "person" instance
		// from the html template
		vm.personInstance = person;

	});
