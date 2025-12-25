import { Request,Response } from "express"

export const home  = async (reqest:Request,response:Response) => {
 try {
        response.status(200).json({
             message:"Welcome To /register api",
            success:true
        })

 } catch (error) {
    if(error instanceof Error){
        response.status(400).json({
            message:"Error Found at Server-Side",
            success:false
        })
    }
 }   
}
export const register  = async (reqest:Request,response:Response) => {
 try {
        response.status(200).json({
             message:"Welcome To /register api",
            success:true
        })

 } catch (error) {
    if(error instanceof Error){
        response.status(400).json({
            message:"Error Found at Server-Side",
            success:false
        })
    }
 }   
}

export const login  = async (reqest:Request,response:Response) => {
 try {
    
 } catch (error) {
    
 }   
}