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

    $scope.prices = {
        largePizza: 19.90,
        largeToppings: 2,
        mediumPizza: 15.90,
        mediumToppings: 1.5,
        smallPizza: 12.90,
        smallToppings: 1,

    };

    $interval(() => {
        $scope.myTime = new Date();

    }, 1000);

    $scope.isChecked = false;

    $scope.myToppings = new Array;

    $scope.isCheckedTopping = (event, name)=>{
        console.log(event.currentTarget.checked ? 'aaaaa' : 'a');
        if(event.currentTarget.checked) {
            $scope.myToppings.push({name: name});
        } else {
            $scope.myToppings.splice( $scope.myToppings.indexOf(name),1);
        }

        console.log($scope.myToppings)
    }
}]);
