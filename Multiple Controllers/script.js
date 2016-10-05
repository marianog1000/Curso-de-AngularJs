
angular.module("app", [])
	.controller("firstController", first)
	.controller("secondController", second);
	
	
	function first() {
		var fs = this;
		fs.firstName = "John";
		fs.lastName = "Doe";

		fs.getFullName = function() {
			return fs.firstName + " " + fs.lastName;
		}
	};	
	function second() {
		var sd = this;
		sd.firstName = "Bob";
		sd.middleName = "Al";
		sd.lastName = "Smith";

		sd.getFullName = function() {
			return sd.firstName + " " + sd.middleName + " " + sd.lastName;
		}	
	}
