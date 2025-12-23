"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = __importDefault(require("./config"));
exports.pool = promise_1.default.createPool({
    host: config_1.default.HOSTNAME,
    user: config_1.default.USERNAME,
    password: config_1.default.PASSWORD,
    database: config_1.default.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
