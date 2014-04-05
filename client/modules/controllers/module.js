angular.module('riverMoss.modules').controller('moduleController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/modules/templates/what-is-a-module.tpl.html'
        },
        {
            template: '/modules/templates/getter-setter.tpl.html'
        },
        {
            template: '/modules/templates/config-vs-run.tpl.html'
        },
        {
            template: '/modules/templates/presentation-module.tpl.html'
        }
    ];

    $scope.nextSection = { name: 'Services', path: 'services' };
}]);