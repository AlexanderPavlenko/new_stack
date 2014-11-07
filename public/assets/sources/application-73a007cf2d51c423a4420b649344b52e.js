/******/
 (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module('feed', []);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(3);


/***/ },
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
/******/ ])
;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
// require jquery
// require jquery_ujs


;
