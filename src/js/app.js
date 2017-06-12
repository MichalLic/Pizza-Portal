const pizzaPortal = angular.module('pizzaPortal', ['pizzaDirectives']);

pizzaPortal.controller('pizzaCrtl', ['$scope', '$interval', ($scope, $interval) => {

    $interval(() => {
        $scope.myTime = new Date();

    }, 1000);
    $scope.isChecked = false;
}]);
