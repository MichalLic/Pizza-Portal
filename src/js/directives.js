const pizzaDirective = angular.module('pizzaDirective', []);

pizzaDirective.directive('summaryPizza', () => {
    return {
        restrict: 'E',
        template: `<div ng-show="orderPizza" class="user-order">
                        <h1>The order was accepted!</h1>
                        <h2 class="green-border">We are preparing order for:</h2>
                        <ul>
                            <li><span>Name: </span>{{user.name}}</li>
                            <li><span>E-mail: </span>{{user.email}}</li>
                            <li><span>Address: </span>{{user.address}}</li>
                            <li><span>Post Code: </span>{{user.postcode}}</li>
                            <li><span>Phone: </span>{{user.contact}}</li>
                       </ul>
                    </div>`
    }
});