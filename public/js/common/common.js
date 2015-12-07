define([
  'require', 'angular',
  'common/services/services', 'common/directives/directives',
  'common/controllers/controllers', 'common/services/services'
], function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('common', ['ngRoute', 'common.services', 'common.controllers', 'common.directives']);
});