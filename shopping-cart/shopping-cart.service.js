'use strict';

angular.module('shoppingCart').controller ('shoppingCartController', function($scope, $http, ngCart) {
    ngCart.setTaxRate(null);
    ngCart.setShipping(null);

    var itemsArray = ngCart.getItems();

    var itemNames = new Array();

    for(var i = 0; i < itemsArray.length; i++){
        console.log(itemsArray[i]._name);
        itemNames.push(itemsArray[i]._name);
    }

    $scope.settings =
        {"paypal":
            {
                "business": "yyfyou1991@gmail.com",
                "item_name" : itemNames,
                "currency_code" : "USD"
            }
        };



});