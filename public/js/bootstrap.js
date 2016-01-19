require.config({
  paths: {
    'angular' : '../components/angular/angular',
    'ngResource': '../components/angular-resource/angular-resource',
    'ngRoute': '../components/angular-route/angular-route',
    'ngCookies': '../components/angular-cookies/angular-cookies',
    'ngProgressLite': '../components/ngprogress-lite/ngprogress-lite',
    'jquery': '../components/jquery/dist/jquery',
    'bootstrap-lib': '../components/bootstrap/dist/js/bootstrap',
    'app': './app'
  },
  shim: {
    ngRoute: {
      deps: ['angular']
    },
    ngResource: {
      deps: ['angular']
    },
    ngCookies: {
      deps: ['angular']
    },
    ngProgressLite: {
      deps: ['angular']
    },
    app: {
      deps: ['angular']
    },
    'bootstrap-lib': {
      deps: ['jquery']
    },
    angular: {
      exports: 'angular'
    }
  },
  baseUrl: '/js'
});

// доп либы для ангулара
define('ngAdditional', ['ngResource', 'ngRoute', 'ngCookies', 'ngProgressLite']);

require(['app', 'ngAdditional', 'bootstrap-lib'], function (app) {
  app.init();
});