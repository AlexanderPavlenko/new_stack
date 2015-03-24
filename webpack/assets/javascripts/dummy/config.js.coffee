require 'flux-angular/src/flux-angular'

angular.module('dummyConfig', [
  'flux'
])
.config (fluxProvider) ->
  fluxProvider.useCloning false
