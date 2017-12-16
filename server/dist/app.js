"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var Router = require("./routes/index");
var adminClientsRouter = require("./api/admin-clients/router");
var contactRouter = require("./api/contact/router");
var generalRouter = require("./api/general/router");
// todo split for production
var dev_1 = require('./env/dev');
var production_1 = require('./env/production');
var envConf = dev_1.devConf;
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'dev') {
    envConf = production_1.prodConf;
}
/**
 * The server.
 *
 * @class Server
 */
var Server = (function () {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //configure routes
        this.routes();
    }
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(morgan(envConf.logger));
    };
    Server.prototype.routes = function () {
        //get router
        var router;
        router = express.Router();
        this.app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.json()); // parse application/json
        this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        // create context
        this.app.use(function (req, res, next) {
            req.ctx = { user: null };
            if (req.headers.ctx) {
                var ctxHeader = JSON.parse(Buffer.from(req.headers.ctx, 'base64').toString());
                if (ctxHeader.userId !== 0) {
                    console.log('load user now');
                }
                else {
                    next();
                }
            }
            else {
                next();
            }
        });
        //create routes
        this.app.use("/api/admin-clients", new adminClientsRouter.Router().getRouter());
        this.app.use("/api/contact", new contactRouter.Router().getRouter());
        this.app.use("/api/g", new generalRouter.Router().getRouter());
        this.app.use("/", new Router.Home(this.app).getRouter());
        //use router middleware
        this.app.use(router);
    };
    return Server;
})();
var server = Server.bootstrap();
server.app.listen(envConf.port, function () {
    console.log("App listening on port " + envConf.port);
});
