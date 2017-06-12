const pizzaDirectives = angular.module('pizzaDirectives', []);

pizzaDirectives.directive('newPizza', function () {
    return {
        restrict: 'AEC',
        template: `<div class="pizza-section">
<form name="pizzaForm" class="flex-between">
                <div class="item-block">
                    <label for="pizzaLg">
                        <input type="radio" id="pizzaLg" ng-model="isChecked" ng-value="4">
                        <div ng-class="{isSelected : (isChecked === 4)}">
                            <div class="large-pizza pizza">
                                <div class="slice-pizza slice1"></div>
                                <div class="slice-pizza slice2"></div>
                                <div class="slice-pizza slice3"></div>
                                <div class="slice-pizza slice4"></div>
                            </div>
                        </div>
                    </label>
                    <h3>Large 45cm</h3>
                </div>
                <div class="item-block">
                    <label for="pizzaMd">
                        <input type="radio" id="pizzaMd" ng-model="isChecked" ng-value="5">
                        <div ng-class="{isSelected : isChecked == 5}">
                            <div class="medium-pizza pizza">
                                <div class="slice-pizza slice1"></div>
                                <div class="slice-pizza slice2"></div>
                                <div class="slice-pizza slice3"></div>
                                <div class="slice-pizza slice4"></div>
                            </div>
                        </div>
                    </label>
                    <h3>Medium 37cm</h3>
                </div>
                <div class="item-block">
                    <label for="pizzaSm">
                        <input type="radio" id="pizzaSm" ng-model="isChecked" ng-value="6">
                        <div ng-class="{isSelected : isChecked == 6}">
                            <div class="small-pizza pizza">
                                <div class="slice-pizza slice1"></div>
                                <div class="slice-pizza slice2"></div>
                                <div class="slice-pizza slice3"></div>
                                <div class="slice-pizza slice4"></div>
                            </div>
                        </div>
                    </label>
                    <h3>Small 30cm</h3>
                </div>
            </form>
</div>`
    }
});