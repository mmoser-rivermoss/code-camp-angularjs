angular.module('riverMoss.promises').controller('PromisesController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/promises/templates/what-is-a-promise.tpl.html'
        },
        {
            template: '/promises/templates/lazy-load.tpl.html'
        }
    ];


}]);