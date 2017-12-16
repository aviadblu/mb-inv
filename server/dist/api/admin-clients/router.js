/// <reference path="../../_all.d.ts" />
var express = require("express");
var index_1 = require('./index');
var AdminClientsAPI = new index_1.AdminClients();
var Router = (function () {
    function Router() {
        this.router = express.Router();
        this.router.post('/', function (req, res) {
            AdminClientsAPI.addNewClient(req.body)
                .then(function (rr) {
                res.send(rr);
            }, function (err) {
                res.status(500).send(err);
            });
        });
        this.router.get('/', function (req, res) {
            AdminClientsAPI.getClients()
                .then(function (rr) {
                res.send(rr);
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
