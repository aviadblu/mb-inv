/// <reference path="../../_all.d.ts" />
import * as express from "express";
import {Contact} from './index';

let ContactAPI = new Contact();

export class Router {
    private router: any;

    constructor() {
        this.router = express.Router();

        this.router.post('/', (req, res) => {

            ContactAPI.sendMail(req.body)
                .then(() => {
                    res.send({message: 'ok'});
                }, err => {
                    res.status(500).send(err);
                });

        });

    }

    getRouter() {
        return this.router;
    }
}