angular.module('riverMoss.notifications').controller('NotificationController', ['$scope', 'Notifications', function ($scope, notificationsService) {
    $scope.notificationsService = notificationsService;
}]);