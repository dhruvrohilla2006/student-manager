import { Router } from "express";
import { home, login, register } from "../controller/auth.controller";
import { authCheck } from "../middleware/auth.middleware";
const authRouter:Router = Router();

authRouter.get("/",authCheck,home)
authRouter.post("/register",register)
authRouter.get("/login",login)


export default authRouter;