angular.module('riverMoss.services-topic')
    .factory('d3Service', ['$document', '$q', '$rootScope', function($document, $q, $rootScope) {
        var defer = $q.defer();

        function onScriptLoad() {
            $rootScope.$apply(function () {
                defer.resolve(window.d3);
            });
        }

        var scriptTag = $document[0].createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.async = true;
        scriptTag.src = 'http://d3js.org/d3.v3.min.js';
        scriptTag.onreadystatechange = function() {
            if (this.readyState == 'complete') { onScriptLoad(); }
        };
        scriptTag.onload = onScriptLoad;

        var body = $document[0].getElementsByTagName('body')[0];
        body.appendChild(scriptTag);

        return {
            d3: function() { return defer.promise; }
        };
    }]);