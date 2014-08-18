'use strict';

var components = angular.module('inmobiliaria.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('inmobiliaria', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'inmobiliaria.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngResource'
]);
angular.componentFactory.moduleDecorator(app);