angular.module('riverMoss.scope').controller('EventingController', ['$scope', function($scope) {
    $scope.broadcast = function() {
        $scope.$broadcast('event-broadcasted', $scope.event.data);
        $scope.event.data = '';
    };

    $scope.emit = function() {
        $scope.$emit('event-emitted', $scope.event.data);
        $scope.event.data = '';
    };
}]);