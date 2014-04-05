angular.module('riverMoss.services-topic').controller('ValuesController', ['$scope', 'Characters', function($scope, characters) {
    $scope.characters = characters;
    $scope.selectedCharacter = $scope.characters[0];
}]);