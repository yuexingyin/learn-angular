'use strict';

angular.module('shoppingCart').controller ('shoppingCartController', function($scope, $http, ngCart) {
    ngCart.setTaxRate(null);
    ngCart.setShipping(null);

    $scope.payWithPaypal = function () {

        var subTotal = ngCart.getSubTotal();

        var itemsArray = [];

        for(var i = 0; i < ngCart.getItems().length; i++){
            itemsArray.push(ngCart.getItemById(ngCart.getItems()[i]._id));
        }

        var itemNames = [];

        for(var i = 0; i < itemsArray.length; i++){
            itemNames.push(itemsArray[i]._name);
        }

        $scope.settings =
            {"paypal":
                {
                    "business": "yyfyou1991@gmail.com",
                    "item_name" : itemNames,
                    "sub_total" : subTotal,
                    "currency_code" : "USD"
                }
            };

        for(var j = 0; j < itemsArray.length; j++){
            ngCart.removeItemById(itemsArray[j]._id);
            console.log(itemsArray[j]._id);
        }
    }


});