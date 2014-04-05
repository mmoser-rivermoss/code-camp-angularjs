angular.module('riverMoss.directives').directive('button', [function() {
    return {
        restrict: 'E',
        compile: function(element, attr) {
            element.addClass('btn');

            if (attr.buttonType) {
                element.addClass('btn-' + attr.buttonType);
            } else if (attr.type === 'submit') {
                element.addClass('btn-primary');
            }

            if (attr.size) {
                element.addClass('btn-' + attr.size);
            }
        }
    };
}]);