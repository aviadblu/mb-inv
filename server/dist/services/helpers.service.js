var cloudinary = require('cloudinary');
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.escape = function (str) {
        return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
            switch (char) {
                case "\0":
                    return "\\0";
                case "\x08":
                    return "\\b";
                case "\x09":
                    return "\\t";
                case "\x1a":
                    return "\\z";
                case "\n":
                    return "\\n";
                case "\r":
                    return "\\r";
                case "\"":
                case "'":
                case "\\":
                case "%":
                    return "\\" + char; // prepends a backslash to backslash, percent,
            }
        });
    };
    Helpers.uploadImage = function (url) {
        return new Promise(function (resolve, reject) {
            if (!url) {
                reject();
            }
            else if (url.indexOf('cloudinary') > -1) {
                resolve(url);
            }
            else {
                cloudinary.uploader.upload(url, function (result) {
                    resolve(result.secure_url);
                });
            }
        });
    };
    return Helpers;
})();
exports.Helpers = Helpers;
