import app from "./server";
import config from "./config/config";
import dotenv from 'dotenv'
dotenv.config()

try {
  console.log(config);
  
  app.listen(config.PORT, () => {
    console.log(`Server running on PORT http://localhost:${config.PORT}`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
  process.exit(1);
}

// try {
  
//   app.listen(3000, () => {
//     console.log(`Server running on PORT http://localhost:${3000}`);
//   });
// } catch (error) {
//   console.error("Failed to start server:", error);
//   process.exit(1);
// }