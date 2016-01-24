(function() {
  'use strict';

  angular
    .module('tableTopr')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.games', function() {
        angular.forEach(vm.games, function(game) {
          typist.type(game.name).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function MalarkeyController($log, games) {
      var vm = this;

      vm.games = [];

      activate();

      function activate() {
        return getGames().then(function() {
          $log.info('Activated Games View');
        });
      }

      function getGames() {
        return games.gameList(10).then(function(data) {
          vm.games = data;

          return vm.games;
        });
      }
    }

  }

})();
