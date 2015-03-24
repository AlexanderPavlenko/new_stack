require 'flux-angular/src/flux-angular'

require('angular').module('dummyConfig', [
  'flux'
])
.config (fluxProvider) ->
  fluxProvider.useCloning false
