angular.module('riverMoss.scope').controller('BroadcastListenerController', ['$scope', function($scope) {
    $scope.$on('event-broadcasted', function(event, data) {
        $scope.broadcastedData = data;
    });
}]);