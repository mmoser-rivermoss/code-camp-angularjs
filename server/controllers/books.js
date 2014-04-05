exports.list = function(req, res) {
    var books = [
        'Mastering Web Application Development with AngularJS',
        'AngularJS Directives',
        'ng-book - The Complete Book on AngularJS',
        'AngularJS'
    ];

    res.jsonp(books);
};