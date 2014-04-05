angular.module('riverMoss').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('greeting', {
                url: '/greeting',
                templateUrl: 'views/index.html'
            })
            .state('scope', {
                url: '/scope',
                templateUrl: 'views/scope.html'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'views/services.html'
            })
            .state('modules', {
                url: '/modules',
                templateUrl: 'views/modules.html'
            })
            .state('directives', {
                url: '/directives',
                templateUrl: 'views/directives.html'
            })
            .state('promises', {
                url: '/promises',
                templateUrl: 'views/promises.html'
            })
            .state('home', {
                url: '/',
                templateUrl: 'views/index.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('riverMoss').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]).run(['$state', '$rootScope', function($state, $rootScope) {
       $rootScope.$state = $state;
    }]);
