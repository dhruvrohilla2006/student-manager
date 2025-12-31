import { NextFunction, Request, Response } from "express";
import { exposeJwtData } from "../libs/jwt";

interface AuthRequest extends Request {
  user?: {
    id: number;
  };
}

export const authCheck = async (
  request: AuthRequest,
  response: Response,
  next: NextFunction
) => {
  try {
    const authHeader = request.headers.authorization;
    
    if (!authHeader) {
      return response.status(401).json({
        message: "Authorization header missing",
        success: false,
      });
    }

    const [scheme, token] = authHeader.split(" ");
    
    if (scheme !== "Bearer" || !token) {
      return response.status(401).json({
        message: "Invalid authorization format",
        success: false,
      });
    }

    const payload = exposeJwtData(token);
    console.table(payload);
    

    // attach user to request
    request.user = {
      id: payload.id
    };
    next();
  } catch (error) {
    if(error instanceof Error){
        console.log(error);
    return response.status(401).json({
      message: "Unauthorise User",
      success: false,
    });
    }
      
  }
};
