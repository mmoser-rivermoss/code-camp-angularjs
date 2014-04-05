angular.module('riverMoss.promises').controller('AllPromisesController', ['$scope', 'Books', 'Permissions', '$q', function($scope, booksService, permissionsService, $q) {
    $scope.initialize = function() {
        var promises = [
            booksService.query(),
            permissionsService.getPermissions()
        ];

        $q.all(promises).then(function(data) {
            $scope.books = data[0];
            $scope.permissions = data[1];
        });
    };
}]);
