define([
  'main/main', 'common/common'
], function () {
  'use strict';

  var app = angular.module('myApp', ['ngRoute', 'main', 'common']);

  app.init = function () {
    angular.bootstrap(document, ['myApp']);
  };

  app.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', { templateUrl: '/partials/main.html', controller: 'main.myCtrl' })
        .when('/view1', { templateUrl: '/partials/view1.html', controller: 'main.myCtrl2' })
        .when('/view2', { templateUrl: '/partials/view2.html', controller: 'main.myCtrl3' })
/*        .when('/view', { templateUrl: 'partials/dashboard', controller: 'dashboardController' })
        .when('/facebook', { templateUrl: 'partials/dashboard', controller: 'facebookController' })
        .when('/github', { templateUrl: 'partials/dashboard', controller: 'githubController' })
        .when('/twitter', { templateUrl: 'partials/dashboard', controller: 'twitterController' })
        .when('/stackoverflow', { templateUrl: 'partials/dashboard', controller: 'stackoverflowController' })
        .when('/search', { templateUrl: 'partials/dashboard', controller: 'searchController' })
        .when('/settings', { templateUrl: 'partials/settings', controller: 'settingsController' })
        .when('/ooops', { templateUrl: 'partials/dashboard', controller: 'errorController' })*/
        .otherwise({ redirectTo: '/' });

    }
  ]);

  app.run(function ($window) {
    // auth.setAuthorizationHeaders();
   // user.initialize();
  });

  return app;
});