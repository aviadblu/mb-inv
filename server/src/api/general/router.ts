/// <reference path="../../_all.d.ts" />
import * as express from "express";
import {General} from './index';

let GeneralAPI = new General();

export class Router {
    private router: any;

    constructor() {
        this.router = express.Router();

        this.router.post('/uploadToCloudinary', (req, res) => {
            GeneralAPI.uploadToCloudinary(req.body.url)
                .then((response) => {
                    res.send({
                        url: response
                    });
                }, (err) => {
                    res.status(500).send(err);
                });
        });
    }

    getRouter() {
        return this.router;
    }
}