"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const base_url_1 = require("../../constants/base-url");
const endpoint = '/v3/user/register';
const userRegister = (parameters) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`${base_url_1.default}${endpoint}`, {
        method: 'POST',
        headers: {
            "content-type": 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(parameters)
    });
    const responseJSON = yield response.json();
    return responseJSON;
});
exports.default = userRegister;
