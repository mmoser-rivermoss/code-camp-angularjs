angular.module('riverMoss.greeting').controller('NgRepeatController', ['$scope', function($scope) {
    $scope.items = [];

    $scope.add = function() {
        var item = {
            name: $scope.name
        };
        $scope.items.push(item);
        $scope.name = '';
    };
}]);