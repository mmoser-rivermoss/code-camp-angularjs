angular.module('riverMoss.promises').factory('Permissions', ['$q', '$timeout', function($q, $timeout) {
    var permissions = [
        { name: 'access-scope', authorized: true },
        { name: 'access-directives', authorized: true },
        { name: 'access-services', authorized: false }
    ];

    function getPermissions() {
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(permissions);
        }, 1000);

        return deferred.promise;
    }

    var service = {
        getPermissions: getPermissions
    };

    return service;
}]);