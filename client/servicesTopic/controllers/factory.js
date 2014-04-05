angular.module('riverMoss.services-topic').controller('FactoryController',
    ['$scope', 'CharacterFactory', function($scope, characterService) {
        $scope.characterService = characterService;
        $scope.selectedCharacter = $scope.characterService.characters[0];
    }]);