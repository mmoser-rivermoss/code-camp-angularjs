angular.module('riverMoss.promises').factory('Books', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
    var books = null;

    function get() {
        if (books !== null) {
            return $q.when(books);
        }

        var deferred = $q.defer();
        $http.get('/books').then(
            function(response) {
               books = response.data;
               $timeout(function() {
                   deferred.resolve(books);
               }, 1000);
            },
            function() {
                deferred.reject();
            }
        );

        return deferred.promise;
    }

    var service = {
      query: get
    };

    return service;
}]);