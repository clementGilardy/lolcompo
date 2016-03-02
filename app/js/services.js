var champServices = angular.module('champServices', ['ngResource']);

champServices.factory('Champ', ['$resource',
    function($resource){
        return $resource('https://euw.api.pvp.net/api/lol/euw/v1.2/champion?api_key=36b93c1a-a7e5-46a6-a7fd-59ff6710080c', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);