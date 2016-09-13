(function () {
  angular
    .module('app')
    .component('alertsTypeItem', {
      templateUrl: 'app/components/AlertsTypeItem.html',
      controller: AlertsTypeItem,
      bindings: {
        alertsType: '<',
        onDestroy: '&',
        onSave: '&'
      }
    });

  function AlertsTypeItem() {
    this.editing = false;
  }

  AlertsTypeItem.prototype = {
    handleDoubleClick: function () {
      this.editing = true;
    },

    handleSave: function (text) {
      this.onSave({
        type: {
          text: text,
          id: this.alertsType.id
        }
      });
      this.editing = false;
    },

    handleDestroy: function (id) {
      this.onDestroy({
        id: id}
      );
    }
  };
})();
