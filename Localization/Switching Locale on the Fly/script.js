
angular.module("mainModule", ["ngLocale"])
	.provider("viewStateManager", function() {
		return {
			$get: function($http, $location, $window, $timeout) {
				return {
					saveState: function(stateObj) {
						var params = {
							method: "saveState"
						};
						var config = {
							params: params
						};

						return $http.post("server.php", stateObj, config);
					},
					restoreState: function() {
						var params = {
							method: "restoreState"
						};

						var config = {
							params: params

						};
						return $http.get("server.php", config);
					},

					changeLanguage: function(localeId) {
						$location.search("localeId", localeId);
						$timeout(function() {
							$window.location.reload();
						}, 10);
					}
				};
			}
		};
	})
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
	})
	.controller("mainController", function($scope, viewStateManager) {
		viewStateManager.restoreState().then(
			function(result) {
				if (result.data != '')
					$scope.viewState = result.data;
			});
		$scope.currentDate = new Date();
		$scope.changeLanguage = function(localeId) {
			viewStateManager.saveState($scope.viewState)
			.then(function() {
				viewStateManager.changeLanguage(localeId);
			});
		};
	});