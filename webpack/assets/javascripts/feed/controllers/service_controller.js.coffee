angular.module('feed')
.controller 'ServiceController', ($scope, $timeout, githubService) ->
  $scope.events = null;
  $scope.setUsername = null;
  timeout = null;
  $scope.$watch 'username', (newUsername) ->
    if newUsername
      if timeout
        $timeout.cancel timeout
      timeout = $timeout(->
        $scope.setUsername = githubService.setUsername(newUsername)
        githubService.events()
        .success (data, status, headers) ->
          $scope.events = data.data
      , 350)
