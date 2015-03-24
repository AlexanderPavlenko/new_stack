require 'angular-ujs'
require './config'
require './signIn/signInController'

angular.module('dummy', [
  'angular.ujs'
  'dummyConfig'
  'signIn'
])
