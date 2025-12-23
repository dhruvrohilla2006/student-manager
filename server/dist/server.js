"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const check_route_1 = __importDefault(require("./route/check.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/check", check_route_1.default);
app.get("/", async (req, res) => {
    res.status(200).json({
        "message": "Hello World"
    });
});
exports.default = app;
