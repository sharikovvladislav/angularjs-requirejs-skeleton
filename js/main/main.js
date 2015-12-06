define([
  'require', 'angular',
  'main/services/services', 'main/directives/directives',
  'main/controllers/controllers', 'main/services/services'
], function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('main', ['ngRoute', 'main.services', 'main.controllers', 'main.directives']);
});