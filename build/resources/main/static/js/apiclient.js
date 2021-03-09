var apiclient = (function () {

    var apiurl = 'http://localhost:8080/blueprints/';

    return {
        getBlueprintsByAuthor: function (author, callback) {
            jQuery.ajax({
                url: apiurl + author,
                success: function (result) {
                    callback(result);
                },
                async: true
            });
        },

        getBlueprintsByNameAndAuthor: function (name, author, callback) {

            jQuery.ajax({
                url: apiurl + author + "/" + name,
                success: function (result) {
                    callback(result);
                },
                async: true
            });
        }
    };
})();