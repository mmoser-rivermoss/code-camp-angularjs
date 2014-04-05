angular.module('riverMoss.slides').directive('slideShow', [function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/slides/templates/slide-show.tpl.html',
        controller: ['$scope', '$location', function($scope, $location) {
            $scope.selectedIndex = 0;
            if ($scope.pages && $scope.pages.length > 0) {
                $scope.selectedTemplate = $scope.pages[0].template;
                $scope.showNextButton = $scope.pages.length > 1;
            }

            $scope.next = function() {
                if ($scope.selectedIndex === $scope.pages.length - 1) {
                    return;
                }

                $scope.selectedIndex++;
                $scope.showNextButton = $scope.selectedIndex < $scope.pages.length - 1;
                $scope.showNextSection = !$scope.showNextButton && $scope.nextSection;
                $scope.showPreviousButton = true;
            };

            $scope.previous = function() {
                if ($scope.selectedIndex === 0) {
                    return;
                }

                $scope.selectedIndex--;
                $scope.showPreviousButton = $scope.selectedIndex !== 0;
                $scope.showNextButton = $scope.pages.length > 1;
                $scope.showNextSection = $scope.pages.length === 1 &&  $scope.nextSection;
            };

            $scope.goToNextSection = function() {
                $location.path($scope.nextSection.path);
                $scope.showNextSection = false;
            };

        }],
        scope: {
            pages: '=',
            nextSection: '='
        },
        compile: function(element, attr) {

        }
    };
}]);