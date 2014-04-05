angular.module('riverMoss.services-topic').controller('ServiceController',
    ['$scope', 'CharacterService', function($scope, characterService) {
        $scope.characterService = characterService;
        $scope.selectedCharacter = $scope.characterService.characters[0];
}]);