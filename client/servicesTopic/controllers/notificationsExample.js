angular.module('riverMoss.services-topic').controller('NotificationsExampleController', ['$scope', 'Notifications', function($scope, notifications) {
    var error = false;

    $scope.add = function($event) {
        $event.preventDefault();
        notifications.show($scope.message, error);
        error = !error;
    };
}]);