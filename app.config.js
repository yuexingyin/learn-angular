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
        when('/courses', {
            template: '<kdcourse></kdcourse>'
        }).
        when('/courses/:courseId', {
            template : '<course-detail></course-detail>'
        }).
        when('/birthdayParty', {
            template: '<birthday-party></birthday-party>'
        }).
        when('/schoolProgram', {
            template: '<school-program></school-program>'
        }).
        when('/login', {
            template: '<kdlogin></kdlogin>'
        }).
        when('/signup', {
            template: '<kdsignup></kdsignup>'
        }).
        when('/aboutUs', {
            template : '<about-us></about-us>'
        }).
        when('/error', {
            template: '<p1>Sorry, there is nothing yet</p1>'
        }).
        otherwise('/home');
    }
]);