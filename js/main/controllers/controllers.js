define(['app', 'main/controllers/myCtrl', 'main/controllers/myCtrl1'], function (app) {
  var module = angular.module('main.controllers', ['main.myModule', 'main.myModule2']);
});