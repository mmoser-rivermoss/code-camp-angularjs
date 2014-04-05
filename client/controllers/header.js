angular.module('riverMoss.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
        {
            "title": "Greeting",
            "link": "greeting"
        },
        {
            "title": "Scope",
            "link": "scope"
        },
        {
            "title": "Modules",
            "link": "modules"
        },
        {
            "title": "Services",
            "link": "services"
        },
        {
            "title": "Directives",
            "link": "directives"
        },
        {
            "title": "Promises",
            "link": "promises"
        },
    ];
    
    $scope.isCollapsed = false;
}]);