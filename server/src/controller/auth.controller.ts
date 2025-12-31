import { Request, Response } from "express";
import * as z from "zod";
import { registerValidator, loginValidator } from "../modal/zodSchemas";
import { student_profile, users } from "../config/sqlConfig";
import db from "../config/sqlConfig";
import { hashpass } from "../libs/bcrypt";
import { jwtTokenGen } from "../libs/jwt";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";


export const home = async (request: Request, response: Response) => {
  try {
    response.status(200).json({
      message: "Welcome To /register api",
      success: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      response.status(400).json({
        message: "Error Found at Server-Side",
        success: false,
      });
    }
  }
};
export const register = async (request: Request, response: Response) => {
  try {
    const data = registerValidator.parse(request.body);

    const verifiedData = {
      name: data.name,
      email: data.email,
      passwordHash: await hashpass(data.password),
      role: data.role,
    };

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, verifiedData.email));

    if (existingUser) {
      return response.status(409).json({
        success:false,
        message: "Email already registered",
      });
    }

    const result = await db.transaction(async (tx) => {
      const [user] = await tx.insert(users).values(verifiedData).$returningId();

      await tx
        .insert(student_profile)
        .values({ user_id: user.id, course: data.course });
      return user;
    });

    response.status(201).json({
      message: "registered User SuccessFully",
      data: {
        email: verifiedData.email,
      },
      success: true,
      jwt: await jwtTokenGen(result.id),
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof z.ZodError) {
        return response.status(400).json({
          success:false,
          message: "Validation failed",
          errors: error.issues,
        });
      }
      console.log(error);

      response.status(400).json({
        message: "Error Found at Server-Side",
        success: false,
      });
    }
  }
};

export const login = async (request: Request, response: Response) => {
  try {
    const verifiedData = loginValidator.parse(request.body);

    const result = await db
      .select({
        id: users.id,
        email: users.email,
        passwordHash: users.passwordHash,
      })
      .from(users)
      .where(eq(users.email, verifiedData.email));

      const user = result[0]
    if (!user) {
    return  response.status(401).json({
      success:false,  
      message: "Invalid Credentials",
      });
    }

    const passSuccess = await bcrypt.compare(
      verifiedData.password,
      user.passwordHash
    );

    if (!passSuccess) {
     return response.status(401).json({
      success:false,  
      message: "Invalid Credentials",
      });
    }

    const token = await jwtTokenGen(user.id);

  return  response.status(200).json({
      success:true,
      jwtToken:token
    })
  } catch (error) {
       if (error instanceof z.ZodError) {
      return response.status(400).json({
        success:false,
        message: "Validation failed",
        errors: error.issues,
      });
    }

    console.error("Error in Login Controller:", error);

    return response.status(500).json({
      success:false,
      message: "Internal server error",
    });
  }

};
