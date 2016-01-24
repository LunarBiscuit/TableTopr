(function() {
  'use strict';

  angular
    .module('tableTopr')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
