const pizzaPortal = angular.module('pizzaPortal', []);

pizzaPortal.controller('pizzaCrtl', ['$scope', '$interval', ($scope, $interval) => {
    $scope.message = 'hello world!';


    $interval(() => {
        $scope.myTime = new Date();

    }, 1000)

}]);
