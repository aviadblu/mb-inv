/// <reference path="../_all.d.ts" />
"use strict";
var express = require("express");
var path = require("path");
var Route;
(function (Route) {
    var Home = (function () {
        function Home(app) {
            this.router = express.Router();
            var clientPath = path.resolve(__dirname, '../../../client/dist');
            app.use(express.static(clientPath));
            this.router.get('/*', function (req, res) {
                res.sendFile(clientPath + '/index.html');
            });
        }
        Home.prototype.getRouter = function () {
            return this.router;
        };
        return Home;
    })();
    Route.Home = Home;
})(Route || (Route = {}));
module.exports = Route;
