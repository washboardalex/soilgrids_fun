"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const api_1 = require("./constants/api");
const constructPropertiesQueryString_1 = require("./helpers/constructPropertiesQueryString");
const defaultQry_1 = require("./constants/defaultQry");
const runQueries = async () => {
    const result = await axios_1.default.get(`${api_1.API_URL}/properties/query?${constructPropertiesQueryString_1.constructPropertiesQueryString(defaultQry_1.defaultQry)}`);
    //   do what you want with result
    console.log(result);
};
runQueries();
