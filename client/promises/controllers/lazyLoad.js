angular.module('riverMoss.promises').controller('LazyLoadController', ['$scope', 'Books', function($scope, booksService) {

    $scope.initialize = function() {
        booksService.query().then(function(books) {
            $scope.books = books;
        });
    };

}]);