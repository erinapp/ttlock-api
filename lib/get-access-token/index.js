"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const base_url_1 = require("../constants/base-url");
const getAccessToken = (params) => {
    (0, node_fetch_1.default)(`${base_url_1.default}/token`, {
        method: 'POST',
        headers: {
            "content-type": 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(params)
    })
        .then(res => res.json())
        .then(resJSON => {
        console.log(JSON.stringify(resJSON, null, 2));
    });
};
exports.default = getAccessToken;
