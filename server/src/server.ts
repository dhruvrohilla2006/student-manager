import  express,{type Response,type Request}  from "express";
import check from "./route/check.route";
import authRouter from "./route/auth.route";
// 

const app = express()


app.use(express.json());
app.use("/check",check);
app.use("/auth",authRouter)

app.get("/",async(req:Request,res:Response)=>{
        res.status(200).json({
            "message":"Hello World"
        })
}) 

export default app;