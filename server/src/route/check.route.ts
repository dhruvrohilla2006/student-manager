import { Router } from "express";
import { ServiceCheck } from "../controller/check.controller";

const check:Router = Router()

check.get("/",ServiceCheck);


export default check