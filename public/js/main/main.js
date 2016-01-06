define([
  'require', 'angular',
  'js/main/services/services', 'js/main/directives/directives',
  'js/main/controllers/controllers', 'js/main/services/services'
], function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('main', ['ngRoute', 'main.services', 'main.controllers', 'main.directives']);
});