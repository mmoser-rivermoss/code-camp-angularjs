angular.module('riverMoss.scope').controller('EmitListenerController', ['$scope', function($scope) {
    $scope.$on('event-emitted', function(event, data) {
       $scope.emittedData = data;
    });
}]);