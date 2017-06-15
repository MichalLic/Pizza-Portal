const pizzaPortal = angular.module('pizzaPortal', ['pizzaDirective']);

pizzaPortal.controller('pizzaCrtl', ['$scope', '$interval', ($scope, $interval) => {

    $scope.isChecked = false;
    $scope.myToppings = new Array;
    $scope.orderPizza = false;
    $scope.unconfirmed = false;

    $scope.toppings = [
        {name: 'Bacon'},
        {name: 'Basil'},
        {name: 'Chili'},
        {name: 'Mozzarella'},
        {name: 'Mushroom'},
        {name: 'Olive'},
        {name: 'Onion'},
        {name: 'Pepper'},
        {name: 'Pepperoni'},
        {name: 'Sweetcorn'},
        {name: 'Tomato'},
        {name: 'Sausage'}
    ];

    $scope.prices = {
        largePizza: 19.90,
        mediumPizza: 15.90,
        smallPizza: 12.90,
    };

    $interval(() => {
        $scope.myTime = new Date();
    }, 1000);


    $scope.setToppingPrice = (event) => {
        if (event.currentTarget.value == 1) {
            $scope.toppingPrice = 1.3;
        } else if (event.currentTarget.value == 2) {
            $scope.toppingPrice = 1;
        } else {
            $scope.toppingPrice = 0.7
        }
        console.log($scope.toppingPrice)
    };


    $scope.isCheckedTopping = (event, name) => {
        if (event.currentTarget.checked) {
            $scope.myToppings.push({name: name});
        } else {
            $scope.myToppings.splice($scope.myToppings.indexOf(name), 1);
        }
        console.log($scope.myToppings)
    };

    $scope.getTotal = () => {
        $scope.pizzaPrice = null;

        if ($scope.isChecked == 1) {
            $scope.pizzaPrice = $scope.prices.largePizza
        }
        else if ($scope.isChecked == 2) {
            $scope.pizzaPrice = $scope.prices.mediumPizza
        }
        else {
            $scope.pizzaPrice = $scope.prices.smallPizza
        }
        return ($scope.pizzaPrice + $scope.myToppings.length * $scope.toppingPrice)
    };

    $scope.confirm = () => {
        if ($scope.pizzaForm.$valid && ($scope.isChecked == 1 || $scope.isChecked == 2 || $scope.isChecked == 3)) {
            $scope.orderPizza = true;
        } else {
            $scope.unconfirmed = true;
        }
    }
}]);