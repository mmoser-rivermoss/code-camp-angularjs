angular.module('riverMoss.promises').factory('Books', ['$http', '$q', function($http, $q) {
    var books = null;

    function get() {
        if (books !== null) {
            return $q.when(books);
        }

        var deferred = $q.defer();
        $http.get('/books').then(
            function(response) {
               books = response.data;
               deferred.resolve(books);
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