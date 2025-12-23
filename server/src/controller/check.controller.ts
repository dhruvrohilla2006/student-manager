import { Request,Response } from "express"
import {pool} from "../config/sqlConfig"
import { RowDataPacket } from "mysql2"
export const ServiceCheck = async (request:Request,response:Response) => {
        try {
                const time  = new Date()
                
               const [row,fields] = await pool.query<RowDataPacket[]>("SELECT first_name FROM student_table");
               console.log(row[0]);
               

                response.status(200).json({
                    message:`This Response was Recorded at ${time.toString()} `,
                    res:row[0],
                    fields:fields[0].name
                })
            
        } catch (error) {
            if(error  instanceof  Error){
            console.log("Server Caught a Error =>", error.message);
            }
            else{
                console.log("Server Caught a Unrecorded Error =>" , error);
                
            }
            
        }
}
