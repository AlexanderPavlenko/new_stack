'use strict';
require 'ngreact'
reactBootstrap = require('react-bootstrap')
ngReactBootstrap = angular.module('ngReactBootstrap', ['react'])

for key, value of reactBootstrap
  do (key, value) ->
    ngReactBootstrap.directive 'rb'+key, ['reactDirective', (reactDirective) ->
      reactDirective value, undefined, {restrict: 'EA'}
    ]

# TODO: fix or remove this useless crap
