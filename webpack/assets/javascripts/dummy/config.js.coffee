require 'flux-angular/src/flux-angular'
require 'angular-ui-router'

signInTemplateUrl = require('./signIn/signIn.html.hamlc')

angular.module('dummyConfig', [
  'flux'
  'ui.router'
])

.config (fluxProvider) ->
  fluxProvider.useCloning false

.config ($stateProvider, $urlRouterProvider) ->

  # Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
  # $urlRouterProvider

  # The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
  # Here we are just setting up some convenience urls.
  # .when('/c?id', '/contacts/:id')
  # .when('/user/:id', '/contacts/:id')

  # If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
  # .otherwise('/')

  # Use $stateProvider to configure your states.
  $stateProvider
  .state 'index',
    url: '/',
    template: ''
  .state 'signIn',
    url: '/sign_in',
    templateUrl: signInTemplateUrl

.run ($rootScope, $state, $stateParams) ->
  # It's very handy to add references to $state and $stateParams to the $rootScope
  # so that you can access them from any scope within your applications.For example,
  # <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
  # to active whenever 'contacts.list' or one of its decendents is active.
  $rootScope.$state = $state
  $rootScope.$stateParams = $stateParams
