require.config({
  paths: {
    'angular' : '../components/angular/angular',
    'ngResource': '../components/angular-resource/angular-resource',
    'ngRoute': '../components/angular-route/angular-route',
    'ngCookies': '../components/angular-cookies/angular-cookies',
    'ngProgressLite': '../components/ngprogress-lite/ngprogress-lite',
    'bootstrap': '../components/bootstrap/dist/js/bootstrap',
    'jquery': '../components/jquery/dist/jquery.min'
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
    bootstrap: {
      deps: ['jquery']
    },
    angular: {
      exports : 'angular'
    }
  },
  baseUrl: './'
});

require(['js/app', 'ngRoute', 'bootstrap', 'jquery'], function (app) {
  app.init();
});