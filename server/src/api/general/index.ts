/// <reference path="../../_all.d.ts" />
"use strict";
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'db5v7kkij',
    api_key: '874821816721741',
    api_secret: 'sh4SDortqqGlpZZJ3ZllyxTBrNA'
});

export class General {
    constructor() {
    }


    public uploadToCloudinary(url) {
        return new Promise((resolve, reject) => {
            if (!url) {
                resolve('');
            } else if (url.indexOf('cloudinary') > -1) {
                resolve(url);
            } else {
                cloudinary.v2.uploader.upload(url, (err, result) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(result.secure_url);
                    }
                });
            }
        });
    }

    public removeFromCloudinary(url) {
        return new Promise((resolve) => {
            if (url.indexOf('cloudinary') > -1) {
                const imageId = url.split('/').pop().split('.')[0];
                console.log(`removing image ${imageId} from cloudinary`);
                cloudinary.uploader.destroy(imageId, () => {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }
}

