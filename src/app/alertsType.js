(function () {
  'use strict';

  angular
    .module('app')
    .component('alertsType', {
      templateUrl: 'app/alertsType.html',
      controller: alertsTypeCtrl
    });

  function alertsTypeCtrl(AlertsTypeService) {
    var self = this;

    AlertsTypeService.getAlertsType().then(function (data) {
      self.lstAlertsType = data;
    });

    this.handleSave = function (text) {
      // this.lstAlertsType = AlertsTypeService.addAlertsType(text);
      AlertsTypeService.addAlertsType(text).then(function (data) {
        self.lstAlertsType = data;
      });
    };

    this.handleUpdate = function (type) {
      // this.lstAlertsType = AlertsTypeService.editAlertsType(type);
      AlertsTypeService.editAlertsType(type).then(function (data) {
        self.lstAlertsType = data;
      });
    };

    this.handleDestroy = function (id) {
      // this.lstAlertsType = AlertsTypeService.deleteAlertsType(id);
      AlertsTypeService.deleteAlertsType(id).then(function (data) {
        self.lstAlertsType = data;
      });
    };
  }
})();
