"use strict";

import * as sqlite3Pre from 'sqlite3';

const sqlite3 = sqlite3Pre.verbose();
const db = new sqlite3.Database('../../db/admin-clients.db');

export class AdminClients {

    getClients() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM clients`;
            db.all(sql, [], (err, rows) => {
                err ? reject(err) : resolve(rows);
            });
        });
    }

    addNewClient(payload) {
        const now = Date.now();
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO clients (
                        name,
                        email,
                        created,
                        last_update
                    )
                    VALUES (?,?,?,?);`;
            db.all(sql, [
                payload.name,
                payload.email,
                now,
                now
            ], (err, rows) => {
                err ? reject(err) : resolve(rows);
            });
        });
    }

}

