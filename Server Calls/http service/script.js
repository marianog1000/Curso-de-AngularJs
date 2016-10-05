
angular.module("mainModule", [])
	.controller("mainController", function($scope, $http, jsonFilter) {
		
		var logResult = function(str, data, status, headers, config) {
			return str + "\n\n" +
				"data : " + data + "\n\n" +
				"status : " + status + "\n\n" +
				"headers : " + jsonFilter(headers()) + "\n\n" +
				"config : " + jsonFilter(config);
		}

		$scope.simpleGetCall = function(withSuccess) {
			var callURL = (withSuccess ? "server.php" : "invalid-url.php");

			$http.get(callURL)
				.success(function(data, status, headers, config) {
					$scope.simpleGetCallResult = logResult("Get Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.simpleGetCallResult = logResult("Get Error ", data, status, headers, config);
				});
		};

		$scope.getCall = function() {
			var params = {
				param1: $scope.getParam1,
				param2: $scope.getParam2
			};

			var config = {
				params: params
			};

			$http.get("server.php", config)
				.success(function(data, status, headers, config) {
					$scope.getCallResult = logResult("Get Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.getCallResult = logResult("Get Error ", data, status, headers, config);
				});
		};

		$scope.getCallJSON = function(){
			var params = {
				jsonObjParam:{
					param1: $scope.getJSONParam1,
					param2: $scope.getJSONParam2
				}			
			};
			
			var config = {
				params: params
			}
			
			$http.get("server.php", config)
				.success(function(data, status, headers, config) {
					data = jsonFilter(data);
					$scope.getCallJSONResult = logResult("Get Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.getCallJSONResult = logResult("Get Error ", data, status, headers, config);
				});		
		};
		
		$scope.getCallTimeOut = function(){
			var params = {
				sleep : 3
			};
			var config = {
				params : params,
				timeout : 1000
			}
			
			$http.get("server.php", config)
				.success(function(data, status, headers, config) {
					$scope.getCallTimeoutResult = logResult("Get Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.getCallTimeoutResult = logResult("Get Error ", data, status, headers, config);
				});		
		};
		
		$scope.getCallCustomHeaders = function(){
			var customHeaderFunc = function(){
				return "Custom header 2 from function";
			};
			
			var headers = {
				"Custom-Header-1":"Custom header 1 value",
				"My-Header-2": customHeaderFunc
			};
			
			var config = {
				headers : headers
			}
			
			$http.get("server.php", config)
				.success(function(data, status, headers, config) {
					$scope.getCallCustomHeaderResult = logResult("Get Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.getCallCustomHeaderResult = logResult("Get Error ", data, status, headers, config);
				});
		};
		
		$scope.getCallTransformFuncs = function(){
			var customTransformRequestFunc = function(data, headersGetter){
				return data;
			}
			
			var customTransformResponseFunc1 = function(data, headersGetter){
				return data + "\n Received from server " + headersGetter("server");
			};
			
			var customTransformResponseFunc2 = function(data, headersGetter){
				return data + "\n PROCCESING END";
			};
			
			var config= {
				transformRequest : customTransformRequestFunc,
				transformResponse : [customTransformResponseFunc1, customTransformResponseFunc2]
			};
			
			$http.get("server.php", config)
				.success(function(data, status, headers, config) {
					$scope.getCallTransformFuncsResult = logResult("Get Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.getCallTransformFuncsResult = logResult("Get Error ", data, status, headers, config);
				});
		};
		
		$scope.postCall = function(){
			var params = {
				param1 : $scope.postParam1,
				param2 : $scope.postParam2				
			};
			
			var config={
				params : params
			}
			
			$http.post("server.php", $scope.postData, config)
				.success(function (data, status, headers, config)
				{
				  $scope.postCallResult = logResult("POST SUCCESS", data, status, headers, config);
				})
				.error(function (data, status, headers, config)
				{
				  $scope.postCallResult = logResult("POST ERROR", data, status, headers, config);
				});
		};
		
		$scope.putCall = function(){
			var params = {
				param1 : $scope.postParam1,
				param2 : $scope.postParam2				
			};
			
			var config={
				params : params
			}
			$http.put("server.php", $scope.putData, config)
				.success(function(data, status, headers, config) {
					$scope.putCallResult= logResult("Put Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.putCallResult= logResult("Put Error ", data, status, headers, config);
				});
		
		};

		$scope.deleteCall = function(){
			var params = {
				param1 : $scope.deleteParam1,
				param2 : $scope.deleteParam2				
			};
			
			var config={
				params : params
			}
			$http.delete("server.php", config)
				.success(function(data, status, headers, config) {
					$scope.deleteCallResult= logResult("Delete Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.deleteCallResult= logResult("Delete Error ", data, status, headers, config);
				});
		
		};
		
		$scope.headCall = function(){
			var params = {
				param1 : $scope.headParam1,
				param2 : $scope.headParam2				
			};
			
			var config={
				params : params
			}
			$http.head("server.php", config)
				.success(function(data, status, headers, config) {
					$scope.headCallResult= logResult("Head Success ", data, status, headers, config);
				})
				.error(function(data, status, headers, config) {
					$scope.headCallResult= logResult("Head Error ", data, status, headers, config);
				});
		
		};
	
	
	});