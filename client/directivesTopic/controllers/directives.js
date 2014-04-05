angular.module('riverMoss.directives').controller('DirectivesController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/directivesTopic/templates/button-scenario.tpl.html'
        },
        {
            template: '/directivesTopic/templates/button.tpl.html'
        },
        {
            template: '/directivesTopic/templates/button-directive.tpl.html'
        },
        {
            template: '/directivesTopic/templates/slide-show-directive.tpl.html'
        }
    ];
    $scope.nextSection = { name: 'Promises', path: 'promises' };
}]);
