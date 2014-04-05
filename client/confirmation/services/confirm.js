angular.module('riverMoss.confirmations').factory('Confirm', ['$modal',
    function($modal) {

        function confirmation(message, title) {
            var modal = $modal.open({
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
            });

            return modal.result;
        }

        return {
            confirmation: confirmation
        };
    }]);