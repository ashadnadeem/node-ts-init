import mongoose, { ConnectOptions } from "mongoose";
import { config } from "../config";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, { dbName: config.dbName });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};
