'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('ChampListController', ['$scope', 'Champ',
  function($scope, Champ) {
    $scope.champs = Champ.query();
  }]);