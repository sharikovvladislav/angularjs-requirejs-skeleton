require.config({
  paths: {
    'angular' : '../components/angular/angular',
    'ngResource': '../components/angular-resource/angular-resource',
    'ngRoute': '../components/angular-route/angular-route',
    'ngCookies': '../components/angular-cookies/angular-cookies',
    'ngProgressLite': '../components/ngprogress-lite/ngprogress-lite'
  },
  shim: {
    ngResource: {
      deps: ['angular'],
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular'],
      exports: 'angular'
    },
    ngCookies: {
      deps: ['angular'],
      exports: 'angular'
    },
    ngProgress: {
      deps: ['angular'],
      exports: 'angular'
    },
    angular: {
      exports : 'angular'
    }
  },
  baseUrl: '/js'
});

require(['app', 'ngRoute'], function (app) {
  app.init();
});