import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongooseUri = process.env.MONGO_URI; 

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongooseUri);
    console.log("Connected to Mongo successfully");
  } catch (error) {
    console.log("Failed to connect to DB: " + error);
  }
};

export default connectToMongo;
