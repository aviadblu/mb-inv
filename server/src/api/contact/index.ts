"use strict";
import {MailService} from '../../services/mail.service';

export class Contact {
    private mailSvc;

    constructor() {
        this.mailSvc = new MailService();
    }

    sendMail(data): Promise<any> {

        let message = `
            <table>
                <tr>
                    <th style="text-align:right;padding: 4px;">From:</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th style="text-align:right;padding: 4px;">Email:</th>
                    <td>${data.email}</td>
                </tr>
                <tr>
                    <th style="text-align:right;padding: 4px;">Message:</th>
                    <td>${data.message}</td>
                </tr>
                <tr>
                    <th style="text-align:right;padding: 4px;">Time:</th>
                    <td>${new Date().toLocaleString("en-UK", {timeZone: "Asia/Jerusalem", hour12: false})}</td>
                </tr>
            </table>
        `;

        return this.mailSvc.sendMail('info+contact@eibo.io, eliranp06@gmail.com, aviadblu@gmail.com', 'Contact form sent from eibo.io', message);

    }

}

