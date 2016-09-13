(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        component: 'main'
      })
      .state('main.alertsType', {
        url: 'alertsType',
        component: 'alertsType'
      })
      .state('main.alerts', {
        url: 'alerts',
        component: 'alerts'
      })
      ;
  }
})();
