"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCheck = void 0;
const sqlConfig_1 = require("../config/sqlConfig");
const ServiceCheck = async (request, response) => {
    try {
        const time = new Date();
        const res = await sqlConfig_1.pool.query("SELECT * FROM student_table");
        console.log(res);
        response.status(200).json({
            message: `This Response was Recorded at ${time.toString()} `,
            res
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Server Caught a Error =>", error.message);
        }
        else {
            console.log("Server Caught a Unrecorded Error =>", error);
        }
    }
};
exports.ServiceCheck = ServiceCheck;
