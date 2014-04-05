angular.module('riverMoss.services-topic').provider('CharacterService2', function() {
    var otherCharacters = [];

    return {
      addCharacter: function(character) {
        otherCharacters.push(character);
      },
      $get: ['Characters', function(characters) {
          var service = {
              // Making a deep copy of the characters
              characters: angular.copy(characters)
          };

          angular.forEach(otherCharacters, function(character) {
             service.characters.push(character);
          });

          return service;
      }]
    };
});

angular.module('riverMoss.services-topic').config(['CharacterService2Provider', function(characterService){
    characterService.addCharacter({name: 'elroy', image: '../../img/elroy.jpg'});
    characterService.addCharacter({name: 'scooby', image: '../../img/scooby.jpg'});
}]);