import { Router } from "express";
import { home, login, register } from "../controller/auth.controller";

const authRouter:Router = Router();

authRouter.get("/",home)
authRouter.get("/register",register)
authRouter.get("/login",login)


export default authRouter