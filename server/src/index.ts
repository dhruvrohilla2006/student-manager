import app from "./server";
import config from "./config/config";

app.listen(config.PORT,()=>{
    console.log(`Server Running at http://localhost:${config.PORT}`);
    
})