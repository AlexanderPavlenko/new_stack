angular.module('feed')
.factory 'githubService', ($http) ->
  githubUrl = 'https://api.github.com'
  githubUsername = null

  runUserRequest = (path) ->
    return $http
      method: 'JSONP',
      url: githubUrl + '/users/' +
        githubUsername + '/' +
        path + '?callback=JSON_CALLBACK'

  return {
  events: ->
    runUserRequest('events')
  setUsername: (username) ->
    githubUsername = username
  }
