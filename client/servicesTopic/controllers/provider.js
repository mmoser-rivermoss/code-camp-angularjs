angular.module('riverMoss.services-topic').controller('ProviderController',
    ['$scope', 'CharacterService2', function($scope, characterService) {
        $scope.characterService = characterService;
        $scope.selectedCharacter = $scope.characterService.characters[0];
    }]);