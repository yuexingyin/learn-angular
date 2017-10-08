'use strict';

angular.module('kdsignup').controller('signupController', function($scope, $location, $http, $route){

    var signupService = function () {
        var signupBody = {
            "userEmail" : $scope.userEmail,
            "userPassword" : $scope.userPassword,
            "firstName" : $scope.firstName,
            "lastName" : $scope.lastName,
            "roleId" : 3
        };

        const signup = {
            method: 'POST',
            url: 'http://127.0.0.1:8080/customer/customers',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: angular.toJson(signupBody)
        };

        console.log(signupBody);

        return $http(signup);
    };

    $scope.submit = function () {

        signupService().then(function(response) {
            var customer = angular.fromJson(response.data);
            if(customer !== null && customer.status === true) {
                window.localStorage.setItem('userEmail', $scope.userEmail);
                $location.path('/home');
            }else{
                window.alert("This user already exist!");
                $route.reload();
            }
        }, function(response) {
            console.log(response.status);
        });
    };

});