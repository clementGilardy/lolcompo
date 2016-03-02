'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('ChampListController', ['$scope', 'Champions',
  function($scope, Champions) {
    $scope.champs = Champions.query();
  }]);