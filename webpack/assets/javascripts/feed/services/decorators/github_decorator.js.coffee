angular.module('feed')
.config ($provide) ->
  $provide.decorator 'githubService', ($delegate) ->
    events = (path) ->
      startedAt = new Date()
      result = $delegate.events(path)

      result.then ->
        console.log("Fetching events took " +
          (new Date() - startedAt) + "ms")

      result

    return {
    setUsername: (username) ->
      $delegate.setUsername(username)
    events: events
    }
