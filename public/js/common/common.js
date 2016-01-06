define([
  'require', 'angular',
  'js/common/services/services', 'js/common/directives/directives',
  'js/common/controllers/controllers', 'js/common/services/services'
], function (require) {
  'use strict';

  var angular = require('angular');

  return angular.module('common', ['ngRoute', 'common.services', 'common.controllers', 'common.directives']);
});