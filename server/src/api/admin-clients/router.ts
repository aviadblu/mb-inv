/// <reference path="../../_all.d.ts" />
import * as express from "express";
import {AdminClients} from './index';

let AdminClientsAPI = new AdminClients();

export class Router {
    private router: any;

    constructor() {
        this.router = express.Router();

        this.router.post('/', (req, res) => {
            AdminClientsAPI.addNewClient(req.body)
                .then((rr) => {
                    res.send(rr);
                }, err => {
                    res.status(500).send(err);
                });
        });

        this.router.get('/', (req, res) => {
            AdminClientsAPI.getClients()
                .then((rr) => {
                    res.send(rr);
                }, err => {
                    res.status(500).send(err);
                });
        });

    }

    getRouter() {
        return this.router;
    }
}