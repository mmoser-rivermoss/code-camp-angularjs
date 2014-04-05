angular.module('riverMoss.services-topic').controller('ServicesController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/servicesTopic/templates/what-is-a-service.tpl.html'
        },
        {
            template: '/servicesTopic/templates/values.tpl.html'
        },
        {
            template: '/servicesTopic/templates/service.tpl.html'
        },
        {
            template: '/servicesTopic/templates/factory.tpl.html'
        },
        {
            template: '/servicesTopic/templates/provider.tpl.html'
        },
        {
            template: '/servicesTopic/templates/compare.tpl.html'
        },
        {
            template: '/servicesTopic/templates/notifications.tpl.html'
        },
        {
            template: '/servicesTopic/templates/d3-example.tpl.html'
        }
    ];

    $scope.nextSection = { name: 'Directives', path: 'directives' };

}]);