angular.module('riverMoss.services-topic').factory('CharacterFactory', ['Characters', function(characters) {
    var service = {
        characters: characters
    };

    return service;
}]);