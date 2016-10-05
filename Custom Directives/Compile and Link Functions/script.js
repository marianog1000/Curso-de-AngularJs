
var logScope = null;
var noDefObjLog = "";
var postLinkLog = "";
var prePostlinkLog = "";
var compileFunctionLog = "";
var compilePostlinkFunctionLog = "";
var compilePrePostlinkFunctionLog = "";
var nestedDirectivesLog = "";
var multiDirectivesLog = "";
var completeExampleLog = "";

var logLine = function(logVariable, directiveName, logString) {
	if (logScope) {
		logScope[logVariable] += "[" + directiveName + "]" + logString + "\n";
	} else {
		this[logVariable] += "[" + directiveName + "]" + logString + "\n";
	}
};


angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.noDefObjLog = noDefObjLog;
		$scope.postLinkLog = postLinkLog;
		$scope.prePostlinkLog = prePostlinkLog;
		$scope.compileFunctionLog = compileFunctionLog;
		$scope.compilePostlinkFunctionLog = compilePostlinkFunctionLog;
		$scope.compilePrePostlinkFunctionLog = compilePrePostlinkFunctionLog;


		$scope.nestedDirectivesLog = nestedDirectivesLog;
		$scope.multiDirectivesLog = multiDirectivesLog;
		$scope.completeExampleLog = completeExampleLog;

		logScope = $scope;
	})
// 1 .
	.directive("nghNoDefinitionObject", function() {
		logLine("noDefObjLog", "nghNoDefinitionObject", "Initialization");

		return function(scope, element, attrs) {
			logLine("noDefObjLog", "nghNoDefinitionObject", "Post-Link" + attrs.nghNoDefinitionObject);
		};
	})
// 2 .
	.directive("nghPostlink", function() {
		logLine("postLinkLog", "nghPostLink", "Initialization");
		return {
			link: function(scope, element, attrs) {
				logLine("postLinkLog", "nghPostLink", "Post-Link " + attrs.nghPostlink)
			}
		};
	})
// 3 .
	.directive("nghPrePostlink", function() {
		logLine("prePostlinkLog", "nghPrePostlink", "Initialization");
		return {
			link: {
				pre: function(scope, element, attrs) {
					logLine("prePostlinkLog", "nghPrePostlink", "Pre-link " + attrs.nghPrePostlink);
				},
				post: function(scope, element, attrs) {
					logLine("prePostlinkLog", "nghPrePostlink", "Post-link " + attrs.nghPrePostlink);
				}
			}
		};
	})
// 4 .
	.directive("nghCompileFunction", function() {
		logLine("compileFunctionLog", "nghCompileFunction", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("compileFunctionLog", "nghCompileFunction", "Compile " + attrs.nghCompileFunction);
			}
		};
	})

//5 .
	.directive("nghCompilePostlinkFunction", function() {
		logLine("compilePostlinkFunctionLog", "nghCompilePostlinkFunction", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("compilePostlinkFunctionLog", "nghCompilePostlinkFunction", "Compile " + attrs.nghCompilePostlinkFunction);
				return function(scope, element, attrs) {
					logLine("compilePostlinkFunctionLog", "nghCompilePostlinkFunction", "Post-link " + attrs.nghCompilePostlinkFunction);
				};
			}
		};
	})

// 6.
	.directive("nghCompilePrePostlinkFunction", function() {
		logLine("compilePrePostlinkFunctionLog", "nghCompilePrePostlinkFunction", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("compilePrePostlinkFunctionLog", "nghCompilePrePostlinkFunction", "Compile " + attrs.nghCompilePrePostlinkFunction);
				return {
					pre: function(scope, element, attrs) {
						logLine("compilePrePostlinkFunctionLog", "nghCompilePrePostlinkFunction", "Pre-link " + attrs.nghCompilePrePostlinkFunction);
					},
					post: function(scope, element, attrs) {
						logLine("compilePrePostlinkFunctionLog", "nghCompilePrePostlinkFunction", "Post-link " + attrs.nghCompilePrePostlinkFunction);
					}
				};
			}
		};
	})

// 7
	.directive("nghNestedDir1", function() {
		logLine("nestedDirectivesLog", "nghNestedDir1", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("nestedDirectivesLog", "nhgNestedDir1", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("nestedDirectivesLog", "nhgNestedDir1", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("nestedDirectivesLog", "nhgNestedDir1", "Post-link");
					}
				};
			}
		};
	})

	.directive("nghNestedDir2", function() {
		logLine("nestedDirectivesLog", "nghNestedDir2", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("nestedDirectivesLog", "nhgNestedDir2", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("nestedDirectivesLog", "nhgNestedDir2", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("nestedDirectivesLog", "nhgNestedDir2", "Post-link");
					}
				};
			}
		};
	})

	.directive("nghNestedDir3", function() {
		logLine("nestedDirectivesLog", "nghNestedDir3", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("nestedDirectivesLog", "nhgNestedDir3", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("nestedDirectivesLog", "nhgNestedDir3", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("nestedDirectivesLog", "nhgNestedDir3", "Post-link");
					}
				};
			}
		};
	})
	// 8
	.directive("nghMultiDir1", function() {
		logLine("multiDirectivesLog", "nghMultiDir1", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("multiDirectivesLog", "nghMultiDir1", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("multiDirectivesLog", "nghMultiDir1", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("multiDirectivesLog", "nghMultiDir1", "Post-link");
					}
				};
			}
		};
	})

	.directive("nghMultiDir2", function() {
		logLine("multiDirectivesLog", "nghMultiDir2", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("multiDirectivesLog", "nghMultiDir2", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("multiDirectivesLog", "nghMultiDir2", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("multiDirectivesLog", "nghMultiDir2", "Post-link");
					}
				};
			}
		};
	})

	.directive("nghMultiDir3", function() {
		logLine("multiDirectivesLog", "nghMultiDir3", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("multiDirectivesLog", "nghMultiDir3", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("multiDirectivesLog", "nghMultiDir3", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("multiDirectivesLog", "nghMultiDir3", "Post-link");
					}
				};
			}
		};
	})
	
	// 9.
	.directive("nghDir1", function() {
		logLine("completeExampleLog", "nghDir1", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("completeExampleLog", "nghDir1", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir1", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir1", "Post-link");
					}
				};
			}
		};
	})
	.directive("nghDir2", function() {
	logLine("completeExampleLog", "nghDir2", "Initialization");
		return {
			compile: function(element, attrs) {
			logLine("completeExampleLog", "nghDir2", "Compile");
				return {
					pre: function(scope, element, attrs) {
					logLine("completeExampleLog", "nghDir2", "Pre-link");
					},
					post: function(scope, element, attrs) {
					logLine("completeExampleLog", "nghDir2", "Post-link");
					}
				};
			}
		};
	})

	.directive("nghDir3", function() {
	logLine("completeExampleLog", "nghDir3", "Initialization");
		return {
			compile: function(element, attrs) {
			logLine("completeExampleLog", "nghDir3", "Compile");
				return {
					pre: function(scope, element, attrs) {
					logLine("completeExampleLog", "nghDir3", "Pre-link");
					},
					post: function(scope, element, attrs) {
					logLine("completeExampleLog", "nghDir3", "Post-link");
					}
				};
			}
		};
	})
	.directive("nghDir4", function() {
		logLine("completeExampleLog", "nghDir4", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("completeExampleLog", "nghDir4", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir4", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir4", "Post-link");
					}
				};
			}
		};
	})
	.directive("nghDir5", function() {
		logLine("completeExampleLog", "nghDir5", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("completeExampleLog", "nghDir5", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir5", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir5", "Post-link");
					}
				};
			}
		};
	})
	.directive("nghDir6", function() {
		logLine("completeExampleLog", "nghDir6", "Initialization");
		return {
			compile: function(element, attrs) {
				logLine("completeExampleLog", "nghDir6", "Compile");
				return {
					pre: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir6", "Pre-link");
					},
					post: function(scope, element, attrs) {
						logLine("completeExampleLog", "nghDir6", "Post-link");
					}
				};
			}
		};
	});