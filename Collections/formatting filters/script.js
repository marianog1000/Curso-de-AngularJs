
angular.module("mainModule", [])
	//.controller("mainController", function($scope, $filter, $dateFilter) {
	.controller("mainController", function($scope) {
	
		$scope.stringData = "Example String";
		$scope.dateData = new Date();
		$scope.numberData = 1350620.547;


		$scope.formatDate1 = function(date, format) {
			return $filter("date")(date, format);
		};

		$scope.formatDate2 = function(date, format) {
			return dateFilter(date, format);
		};
	})
	.filter("customCurrency", function(numberFilter) {
		function isNumeric(value) {
			return (!isNaN(parseFloat(value)) && isFinite(value));

		}
		return function(inputNumber, currencySymbol, decimalSeparator,
		thousandsSeparator, decimalDigits) {
			if (isNumeric(inputNumber)) {
				currencySymbol = (typeof currencySymbol === "undefined") ? "$" : currencySymbol;
				decimalSeparator = (typeof decimalSeparator === "undefined") ? "." : decimalSeparator;
				thousandsSeparator = (typeof thousandsSeparator === "undefined") ? "," : thousandsSeparator;
				decimalDigits = (typeof decimalDigits === "undefined" || !isNumeric(decimalDigits)) ? 2 : decimalDigits;

				if (decimalDigits < 0) decimalDigits = 0;
				var formattedNumber = numberFilter(inputNumber, decimalDigits);
				var numberParts = formattedNumber.split(".");
				numberParts[0] = numberParts[0].split(",").join(thousandsSeparator);
				var result = currencySymbol + numberParts[0];

				if (numberParts.length == 2)
					result += decimalSeparator + numberParts[1];
				return result;
			} else
				return inputNumber;

		};
	});
	