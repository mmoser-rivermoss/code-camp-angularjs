angular.module('riverMoss.confirmations').controller('ConfirmationController', ['$scope', '$modalInstance', 'data', function ($scope, $modalInstance, data) {
    $scope.data = data;

    $scope.ok = function() {
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };    
}]);