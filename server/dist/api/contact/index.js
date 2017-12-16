"use strict";
var mail_service_1 = require('../../services/mail.service');
var Contact = (function () {
    function Contact() {
        this.mailSvc = new mail_service_1.MailService();
    }
    Contact.prototype.sendMail = function (data) {
        var message = "\n            <table>\n                <tr>\n                    <th style=\"text-align:right;padding: 4px;\">From:</th>\n                    <td>" + data.name + "</td>\n                </tr>\n                <tr>\n                    <th style=\"text-align:right;padding: 4px;\">Email:</th>\n                    <td>" + data.email + "</td>\n                </tr>\n                <tr>\n                    <th style=\"text-align:right;padding: 4px;\">Message:</th>\n                    <td>" + data.message + "</td>\n                </tr>\n                <tr>\n                    <th style=\"text-align:right;padding: 4px;\">Time:</th>\n                    <td>" + new Date().toLocaleString("en-UK", { timeZone: "Asia/Jerusalem", hour12: false }) + "</td>\n                </tr>\n            </table>\n        ";
        return this.mailSvc.sendMail('info+contact@eibo.io, eliranp06@gmail.com, aviadblu@gmail.com', 'Contact form sent from eibo.io', message);
    };
    return Contact;
})();
exports.Contact = Contact;
