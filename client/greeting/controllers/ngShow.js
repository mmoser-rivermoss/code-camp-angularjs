angular.module('riverMoss.greeting').controller('NgShowController', ['$scope', function($scope) {
    $scope.hideOne = false;
    $scope.hideTwo = false;
    $scope.hideThree = false;

    $scope.toggleOne = function() {
        $scope.hideOne = !$scope.hideOne;
    };
}]);