"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const config_1 = __importDefault(require("./config/config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
try {
    console.log(config_1.default);
    server_1.default.listen(config_1.default.PORT, () => {
        console.log(`Server running on PORT http://localhost:${config_1.default.PORT}`);
    });
}
catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
}
// Handle uncaught errors
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1);
});
