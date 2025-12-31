import { Request, Response } from "express";
import db, { users } from "../config/sqlConfig";
import { User } from "../config/sqlConfig";
import {hashpass,removehash} from "../libs/bcrypt";
export const ServiceCheck = async (request: Request, response: Response) => {
  try {
    const time = new Date();

    const row:User[] = await db.select().from(users);
    console.log(row[0]);

    response.status(200).json({
      message: `This Response was Recorded at ${time.toString()} `,
      res:row[0],
      pass: await hashpass("helloWorld"),
      hash:await removehash("helloWorld",await hashpass("helloWorld"))
      // fields:fields[0].name
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Server Caught a Error =>", error.message);
    } else {
      console.log("Server Caught a Unrecorded Error =>", error);
    }
  }
};
