"use strict";
import * as nodemailer from 'nodemailer';

export class MailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: 'info@eibo.io',
                pass: 'eibo2017'
            }
        });
    }

    sendMail(to, subject, message): Promise<any> {

        let mailOptions = {
            from: `"EiBO" <info@eibo.io>`,
            to: to,
            subject: subject,
            text: message,
            html: message
        };

        return new Promise((resolve, reject) => {
            this.transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return reject(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                resolve();
            });
        });

    }

}

