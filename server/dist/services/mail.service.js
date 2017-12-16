"use strict";
var nodemailer = require('nodemailer');
var MailService = (function () {
    function MailService() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'info@eibo.io',
                pass: 'eibo2017'
            }
        });
    }
    MailService.prototype.sendMail = function (to, subject, message) {
        var _this = this;
        var mailOptions = {
            from: "\"EiBO\" <info@eibo.io>",
            to: to,
            subject: subject,
            text: message,
            html: message
        };
        return new Promise(function (resolve, reject) {
            _this.transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error(error);
                    return reject(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                resolve();
            });
        });
    };
    return MailService;
})();
exports.MailService = MailService;
