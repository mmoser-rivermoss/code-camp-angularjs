exports.list = function(req, res) {
    var books = [
        'Mastering Web Application Development with AngularJS',
        'ng-book',
        'AngularJS',
        'Directives'
    ];

    res.jsonp(books);
};