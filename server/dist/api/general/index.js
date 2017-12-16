/// <reference path="../../_all.d.ts" />
"use strict";
var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'db5v7kkij',
    api_key: '874821816721741',
    api_secret: 'sh4SDortqqGlpZZJ3ZllyxTBrNA'
});
var General = (function () {
    function General() {
    }
    General.prototype.uploadToCloudinary = function (url) {
        return new Promise(function (resolve, reject) {
            if (!url) {
                resolve('');
            }
            else if (url.indexOf('cloudinary') > -1) {
                resolve(url);
            }
            else {
                cloudinary.v2.uploader.upload(url, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result.secure_url);
                    }
                });
            }
        });
    };
    General.prototype.removeFromCloudinary = function (url) {
        return new Promise(function (resolve) {
            if (url.indexOf('cloudinary') > -1) {
                var imageId = url.split('/').pop().split('.')[0];
                console.log("removing image " + imageId + " from cloudinary");
                cloudinary.uploader.destroy(imageId, function () {
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    };
    return General;
})();
exports.General = General;
