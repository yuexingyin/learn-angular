angular.
module('kdhome').
directive("kdhome", function() {
    return {
        restrict: 'E',
        templateUrl: "home/home.html"
    };
})