angular.module('riverMoss.confirmations').directive('ngConfirm', ['$modal',
    function($modal) {
        return {
            restrict: 'A',
            link: {
                pre: function($scope, element, attrs) {
                    element.bind('click', function(event) {
                        var message = attrs.ngConfirm;
                        var ngClick = attrs.ngClick;

                        event.preventDefault();

                        if (ngClick) {
                            event.stopImmediatePropagation();
                        }

                        if (message) {
                            var title = attrs.ngConfirmTitle;
                            $modal.open({
                                templateUrl: '/templates/confirmation.tpl.html',
                                backdrop: 'static',
                                keyboard: false,
                                resolve: {
                                    data: function() {
                                        return {
                                            title: title ? title : 'Confirm',
                                            message: message
                                        };
                                    }
                                },
                                controller: 'ConfirmationController'
                            }).result.then(
                                function(result) {
                                    if (ngClick) {
                                        $scope.$eval(ngClick);
                                    }
                                },
                                function(result) {
                                    event.stopImmediatePropagation();
                                    event.preventDefault();
                                }
                            );

                        }
                    });
                }
            }
        };

    }]);