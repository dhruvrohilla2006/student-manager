"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_controller_1 = require("../controller/check.controller");
const check = (0, express_1.Router)();
check.get("/", check_controller_1.ServiceCheck);
exports.default = check;
