webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(1);
	angular.module('feed', []);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('feed').controller('ServiceController', ["$scope", "$timeout", "githubService", function($scope, $timeout, githubService) {
	  var timeout;
	  $scope.events = null;
	  $scope.setUsername = null;
	  timeout = null;
	  return $scope.$watch('username', function(newUsername) {
	    if (newUsername) {
	      if (timeout) {
	        $timeout.cancel(timeout);
	      }
	      return timeout = $timeout(function() {
	        $scope.setUsername = githubService.setUsername(newUsername);
	        return githubService.events().success(function(data, status, headers) {
	          return $scope.events = data.data;
	        });
	      }, 350);
	    }
	  });
	}]);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('feed').factory('githubService', ["$http", function($http) {
	  var githubUrl, githubUsername, runUserRequest;
	  githubUrl = 'https://api.github.com';
	  githubUsername = null;
	  runUserRequest = function(path) {
	    return $http({
	      method: 'JSONP',
	      url: githubUrl + '/users/' + githubUsername + '/' + path + '?callback=JSON_CALLBACK'
	    });
	  };
	  return {
	    events: function() {
	      return runUserRequest('events');
	    },
	    setUsername: function(username) {
	      return githubUsername = username;
	    }
	  };
	}]);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('feed').config(["$provide", function($provide) {
	  return $provide.decorator('githubService', ["$delegate", function($delegate) {
	    var events;
	    events = function(path) {
	      var result, startedAt;
	      startedAt = new Date();
	      result = $delegate.events(path);
	      result.then(function() {
	        return console.log("Fetching events took " + (new Date() - startedAt) + "ms");
	      });
	      return result;
	    };
	    return {
	      setUsername: function(username) {
	        return $delegate.setUsername(username);
	      },
	      events: events
	    };
	  }]);
	}]);


/***/ }
]);
