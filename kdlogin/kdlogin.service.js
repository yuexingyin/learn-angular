'use strict';

angular.module('kdlogin').controller('loginController', function($scope, $location, $http, $route){

    $scope.isLogin = function () {
        var tmp = window.localStorage.getItem('userEmail');
        if(tmp === null){
            return false;
        }
        $scope.nameAfterLogin = tmp;
        return true;
    };

    var loginService = function () {
        var loginBody = {
            "userEmail" : $scope.userEmail,
            "userPassword" : $scope.userPassword
        };

        const loginMethod = {
            method: 'POST',
            url: 'http://127.0.0.1:8080/customer/login',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: angular.toJson(loginBody)
        };

        return $http(loginMethod)
    };

    $scope.submitLogin = function () {

        loginService().then(function(response) {
            console.log("1");
            var customer =  angular.fromJson(response.data);
            if(customer !== null && customer.Status === true) {
                window.localStorage.setItem('userEmail', $scope.userEmail);
                $location.path('/home');
            }else{
                window.alert("This user not exist!");
                $route.reload();
            }
        }, function(response) {
            console.log('Request failed');
        });

    };

    $scope.logOut = function () {
        window.localStorage.removeItem('userEmail');
        $location.path('/home');
    };

});
