angular.module('riverMoss.system').factory("Global", [function() {
    var _this = this;
    _this._data = {
        user: window.user,
        authenticated: !! window.user,
        administrator: true
    };

    return _this._data;
}]);