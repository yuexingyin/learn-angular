'use strict';

angular.
module('learnApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/home', {
            template: '<kdhome></kdhome>'
        }).
        when('/error', {
            template: '<p1>Sorry, there is nothing yet</p1>'
        }).
        otherwise('/home');
    }
]);