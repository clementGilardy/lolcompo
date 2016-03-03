'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'champServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html',
        controller: 'ChampListController'
      }).
      when('/stats',{
        templateUrl: 'views/stats.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
