
angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.scopeVar = "Base scope value";
	})
	.directive("nghTranscludeTrue", function() {
		return {
			scope: {},
			transclude: true,
			restrict: 'E',
			replace: true,
			template: 
				'<div>'+ 
					'<h4>[Blue is the template content]</h4>' + 
					'<label>Scope variable: <input type:"text" ng-model="scopeVar"/></label><br/>' + 
					'<br/>' + 
					'<strong>Scope ID:</strong>{{$id}}<br/>' + 
					'<strong>Parent Scope ID:</strong>{{$parent.$id}}<br />' +
					'<strong>Scope Variable:</strong> {{scopeVar}}<br />' +
					'<div ngh-transclude style="background-color:lightgreen;"></div>' +
				'</div>',
			link: function(scope, element, attrs){
				scope.scopeVar = "Directive's scope value";			
			}
		};
	})
	.directive("nghTranscludeElement", function() {
		return {
			scope: {},
			transclude:'element',
			link: function(scope, element, attrs, controller, transcludeFn){
				scope.scopeVar = "Directive's scope value";
				
				var useDirectivesScope = false;
				var cloneTranscludedElement = false;
				var transcludedElement = null;
				var clonedElement= null;
				
				if(attrs.nghTranscludeElement=="3"){
					useDirectivesScope = true;				
				}
				
				if(attrs.nghTranscludeElement == "2" || 
				attrs.nghTranscludeElement == "3" ){
					cloneTranscludeElement = true;				
				}
				
				transcludedElement = transcludeFn();
				
				if (cloneTranscludeElement){
					if (useDirectivesScope){
						transcludeFn(scope, function(clone){
							clonedElement = clone;
						});
					}else{
						transcludeFn(function(clone){
							clonedElement = clone;
						});
					}
				}
				
				if(clonedElement){
					clonedElement.attr("style", "background-color: lightcoral;");
					clonedElement.find("h4").text("[Red is the cloned content]");
					
					element.after(clonedElement);				
				}
				element.after(transcludedElement);				
			}
		};
	});
