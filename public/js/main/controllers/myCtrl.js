define(['angular'], function (angular) {
  var module = angular.module('main.myModule', []);
  module.controller('main.myCtrl', ['$scope', function ($scope) {
    console.log('init ctrl', $scope.$id);
    $scope.debug = function () {
      console.log('debug', $scope.$id);
    }
  }]);
  module.controller('main.myCtrl3', ['$scope', function ($scope) {
    $scope.debug = function () {
      console.log('debug', $scope.$id);
    }
  }])
});