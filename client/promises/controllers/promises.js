angular.module('riverMoss.promises').controller('PromisesController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/promises/templates/what-is-a-promise.tpl.html'
        },
        {
            template: '/promises/templates/lazy-load.tpl.html'
        },
        {
            template: '/promises/templates/all-promises.tpl.html'
        },
        {
            template: '/servicesTopic/templates/d3-example.tpl.html'
        }
    ];


}]);