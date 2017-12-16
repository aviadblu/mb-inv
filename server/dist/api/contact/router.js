/// <reference path="../../_all.d.ts" />
var express = require("express");
var index_1 = require('./index');
var ContactAPI = new index_1.Contact();
var Router = (function () {
    function Router() {
        this.router = express.Router();
        this.router.post('/', function (req, res) {
            ContactAPI.sendMail(req.body)
                .then(function () {
                res.send({ message: 'ok' });
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
