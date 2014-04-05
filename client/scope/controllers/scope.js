angular.module('riverMoss.scope').controller('ScopeController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/scope/templates/scope.tpl.html'
        },
        {
            template: '/scope/templates/hierarchy.tpl.html'
        },
        {
            template: '/scope/templates/improper-ng-model.tpl.html'
        },
        {
            template: '/scope/templates/proper-ng-model.tpl.html'
        },
        {
            template: '/scope/templates/eventing.tpl.html'
        }
    ];

    $scope.nextSection = { name: 'Modules', path: 'modules' };
}]);