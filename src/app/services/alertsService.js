(function () {
  'use strict';

  angular
    .module('app')
    .factory('AlertsService', AlertsService)
    ;

  //
  // Service to get and add alerts.
  //
  function AlertsService($http) {
    var lstAlerts = [];

    var service = {
      getAlerts: getAlerts,
      addAlerts: addAlerts
    };

    return service;

    //////
    function getAlerts() {

      return $http.get("http://localhost:5000/api/v1/alerts").then(function(response) {
        lstAlerts = response.data;
        return lstAlerts;
      });
    }

    function addAlerts(text) {
      var data = { "alertType" : text };

      return $http.post("http://localhost:5000/api/v1/alerts", data ).then(function (response) {
        lstAlerts = response.data;
        return lstAlerts;
      });
    }

  }
})();
