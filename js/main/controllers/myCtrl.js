define(['angular'], function (angular) {
  var module = angular.module('main.myModule', []);
  module.controller('main.myCtrl', function ($scope) {
    console.log($scope.$id);
    $scope.bob = function () {
    }
  })
});