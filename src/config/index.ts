import dotenv from "dotenv";

dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost:27017/nodetsapp",
  dbName: process.env.DB_NAME || "nodetsapp",
};
