(function () {
  'use strict';

  angular
    .module('app')
    .factory('AlertsTypeService', AlertsTypeService)
    ;

  //
  // Service to get, add, edit, and delete alerts type.
  //
  function AlertsTypeService($http) {
    var lstAlertTypes = [];

    var service = {
      getAlertsType: getAlertsType,
      addAlertsType: addAlertsType,
      deleteAlertsType: deleteAlertsType,
      editAlertsType: editAlertsType
    };

    return service;

    //////

    function getAlertsType() {

      return $http.get("http://localhost:5000/api/v1/alertsType").then(function (response) {
        lstAlertTypes = response.data;
        return lstAlertTypes;
      });
    }

    function addAlertsType(text) {
      var data = { "text" : text };

      return $http.post("http://localhost:5000/api/v1/alertsType", data ).then(function (response) {
        lstAlertTypes = response.data;
        return lstAlertTypes;
      });
    }

    function deleteAlertsType(id) {
      
      return $http.delete("http://localhost:5000/api/v1/alertsType/" + id).then(function (response) {
        lstAlertTypes = response.data;
        return lstAlertTypes;
      });
    }

    function editAlertsType(alertsType) {
      var data = { "id": alertsType.id, "text": alertsType.text };

      return $http.put("http://localhost:5000/api/v1/alertsType/" + alertsType.id, data).then(function (response) {
        lstAlertTypes = response.data;
        return lstAlertTypes;
      });
    }
  }
})();
