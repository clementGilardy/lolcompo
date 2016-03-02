var champServices = angular.module('champServices', ['ngResource']);

champServices.factory('Champions', ['$resource',
    function($resource){
        return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=fr_FR&champData=all&api_key=36b93c1a-a7e5-46a6-a7fd-59ff6710080c', {}, {
            query: {method:'GET'}
        });
    }]);