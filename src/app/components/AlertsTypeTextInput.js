(function () {
  angular
    .module('app')
    .component('alertsTypeTextInput', {
      templateUrl: 'app/components/AlertsTypeTextInput.html',
      controller: AlertsTypeTextInput,
      bindings: {
        onSave: '&',
        placeholder: '@',
        newAlertsType: '@',
        editing: '@',
        text: '<'
      }
    });

  /** @ngInject */
  function AlertsTypeTextInput($document, $timeout) {

    this.$timeout = $timeout;
    this.$document = $document;

    this.editing = this.editing || false;
    this.text = this.text || '';

    if (this.text.length) {
      this.focus();
    }
  }

  AlertsTypeTextInput.prototype = {
    handleBlur: function () {
      if (!this.newAlertsType) {
        this.onSave({
          text: this.text
        });
      }
    },

    handleSubmit: function (e) {
      if (e.keyCode === 13) {

        this.onSave({
          text: this.text
        });

        if (this.newAlertsType) {
          this.text = '';
        }
      }
    },

    focus: function () {
      this.$timeout(function () {
        var element = angular.element('.editing .textInput');
        if (element) {
          element.focus();
        }
      }, 0);
    }
  };
})();
