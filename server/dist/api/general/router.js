/// <reference path="../../_all.d.ts" />
var express = require("express");
var index_1 = require('./index');
var GeneralAPI = new index_1.General();
var Router = (function () {
    function Router() {
        this.router = express.Router();
        this.router.post('/uploadToCloudinary', function (req, res) {
            GeneralAPI.uploadToCloudinary(req.body.url)
                .then(function (response) {
                res.send({
                    url: response
                });
            }, function (err) {
                res.status(500).send(err);
            });
        });
    }
    Router.prototype.getRouter = function () {
        return this.router;
    };
    return Router;
})();
exports.Router = Router;
