"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const config = {
    PORT: Number(process.env.PORT ?? 3100),
    nodeEnv: process.env.NODE_ENV ?? "development",
    HOSTNAME: process.env.HOST ?? "127.0.0.1",
    DBPORT: Number(process.env.DBPORT ?? 3366),
    USERNAME: process.env.USER ?? "root",
    PASSWORD: process.env.PASS ?? "",
    DATABASE: process.env.DATABASE ?? "smart_student"
};
exports.default = config;
