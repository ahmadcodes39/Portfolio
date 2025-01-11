import express from "express"; 
import dotenv from "dotenv"
import router from "./Routes/contactForm.js";
import connectToMongo from "./Config/db.js";
import cors from "cors";

connectToMongo();
dotenv.config();
const app = express(); 
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  };
  
  app.use(cors(corsOptions));

app.use(express.json());   
app.use('/api',router)
app.listen(port, () => {
  console.log(`Server started on port ${port}`); 
}); 
 