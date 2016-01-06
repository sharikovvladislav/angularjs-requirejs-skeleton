define(['angular'], function (angular) {
  var module = angular.module('main.myModule', []);
  module.controller('main.myCtrl', function ($scope) {
    $scope.debug = function () {
      console.log('debug', $scope.$id);
    }
  });
  module.controller('main.myCtrl3', function ($scope) {
    
    $scope.debug = function () {
      console.log('debug', $scope.$id);
    }
  })
});