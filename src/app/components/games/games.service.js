(function() {
  'use strict';

  angular
    .module('tableTopr')
    .factory('games', games);

  /** @ngInject */
  function games($log, $http) {
    var apiHost = 'http://localhost:3003'; // express server local

    var service = {
      apiHost: apiHost,
      gameList: getGames
    };

    return service;

    function getGames(limit) {

      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/games?per_page=' + limit)
        .then(getGamesComplete)
        .catch(getGamesFailed);

      function getGamesComplete(response) {
        return response.data;
      }

      function getGamesFailed(error) {
        $log.error('XHR Failed for getGames.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
