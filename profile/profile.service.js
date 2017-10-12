'use strict';

angular.module('kdprofile').controller('profileController', function ($scope, $location, $http, $route) {

    $scope.userFirstName = window.localStorage.getItem('userFirstName');
    $scope.userLastName = window.localStorage.getItem('userLastName');
    $scope.userEmail = window.localStorage.getItem('userEmail');

    var passwordUpdateService = function () {
        var passwordUpdateBody = {
            "userEmail" : $scope.userEmail,
            "userOldPassword" : $scope.userOldPassword,
            "userNewPassword" : $scope.userNewPassword
        };

        const update = {
            method: 'PUT',
            url: 'http://127.0.0.1:8080/customer/password',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: angular.toJson(passwordUpdateBody)
        };

        return $http(update);
    };

    $scope.passwordUpdate = function () {
        passwordUpdateService().then(function(response) {
            var status = angular.fromJson(response.data.Status);
            if(status !== null && status === true) {
                alert("Update successfully");
                $location.path('/home');
            }else{
                window.alert("The Old password is wrong");
                $route.reload();
            }
        }, function(response) {
            console.log(response.status);
        });
    };
});