
angular.module("mainModule", [])
	.controller("simpleController", control); 
	function control(){
		var vm = this;
		vm.firstName = "John";
		vm.lastName = "Doe";

		vm.getFullName = function() {
		return vm.firstName + " " + vm.lastName;
		}	
	};
