define(['angular'], function (angular) {
  var module = angular.module('main.myModule2', []);
  module.controller('main.myCtrl2', function ($scope) {
    $scope.debug = function () {
      console.log('debug', $scope.$id);
    }
  })
});