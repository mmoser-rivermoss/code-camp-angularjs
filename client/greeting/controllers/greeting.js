angular.module('riverMoss.greeting').controller('greetingController', ['$scope', function($scope) {
    $scope.pages = [
        {
            template: '/greeting/templates/greeting.tpl.html'
        },
        {
            template: '/greeting/templates/what-is-angularjs.tpl.html'
        },
        {
            template: '/greeting/templates/what-comes-with-angularjs.tpl.html'
        },
        {
            template: '/greeting/templates/hello-world.tpl.html'
        },
        {
            template: '/greeting/templates/ng-show.tpl.html'
        },
        {
            template: '/greeting/templates/ng-switch.tpl.html'
        },
        {
            template: '/greeting/templates/ng-repeat.tpl.html'
        }
    ];

    $scope.nextSection = { name: 'Scope', path: 'scope' };
}]);