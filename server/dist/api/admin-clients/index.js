"use strict";
var sqlite3Pre = require('sqlite3');
var sqlite3 = sqlite3Pre.verbose();
var db = new sqlite3.Database('../../db/admin-clients.db');
var AdminClients = (function () {
    function AdminClients() {
    }
    AdminClients.prototype.getClients = function () {
        return new Promise(function (resolve, reject) {
            var sql = "SELECT * FROM clients";
            db.all(sql, [], function (err, rows) {
                err ? reject(err) : resolve(rows);
            });
        });
    };
    AdminClients.prototype.addNewClient = function (payload) {
        var now = Date.now();
        return new Promise(function (resolve, reject) {
            var sql = "INSERT INTO clients (\n                        name,\n                        email,\n                        created,\n                        last_update\n                    )\n                    VALUES (?,?,?,?);";
            db.all(sql, [
                payload.name,
                payload.email,
                now,
                now
            ], function (err, rows) {
                err ? reject(err) : resolve(rows);
            });
        });
    };
    return AdminClients;
})();
exports.AdminClients = AdminClients;
