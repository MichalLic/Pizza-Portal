const pizzaPortal = angular.module('pizzaPortal', []);

pizzaPortal.controller('pizzaCrtl', ['$scope', '$interval', ($scope, $interval) => {

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
        {name: 'Salami'}
    ];

    $interval(() => {
        $scope.myTime = new Date();

    }, 1000);

    $scope.isChecked = false;

    $scope.addToppings = () => {
        console.log('nieeeee')
    }

}]);
