angular.module('riverMoss.scope').controller('hierarchyController', ['$scope', function($scope){
    $scope.tree = {
        name: '$rootScope',
        children: [
            {
                name: '$rootScope',
                children: [
                    {}
                ]
            },
            {
                name: 'scope001',
                children: [
                    {
                        name: 'scope002',
                        children: [
                            {}
                        ]
                    },
                    {
                        name: 'scope003',
                        children: [
                            {}
                        ]
                    },
                ]
            },
            {
                name: 'scope004',
                children: [
                    {
                        name: 'scope005',
                        children: [
                            {}
                        ]
                    },
                ]
            },
            {
                name: 'scope006',
                children: [

                ]
            }
        ]
    };
}]);