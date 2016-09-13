(function () {
  'use strict';

  angular
    .module('app')
    .component('alerts', {
      templateUrl: 'app/alerts.html',
      controller: alertsCtrl
    });

  function alertsCtrl(AlertsService, AlertsTypeService, $uibModal) {
    var self = this;

    AlertsService.getAlerts().then(function (data) {
      self.lstAlerts = data;
    });

    AlertsTypeService.getAlertsType().then(function (data) {
      self.lstAlertsType = data;
    });

    this.createNew = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/components/createAlertsModal.html',
        controller: createNewAlertsCtrl,
        controllerAs: '$ctrl',
        resolve: {
          items: function () {
            return self.lstAlertsType;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        // $ctrl.selected = selectedItem;
      }, function () {
      });
    };

    function createNewAlertsCtrl($uibModalInstance, items) {
      this.items = items;

      this.ok = function (selectedAlert) {
        // Create a new alerts
        AlertsService.addAlerts(selectedAlert.text).then(function(data) {
          self.lstAlerts = data;
        });

        $uibModalInstance.close();
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
  }
})();
