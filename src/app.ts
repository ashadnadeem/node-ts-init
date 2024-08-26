import express from "express";
import { json, urlencoded } from "body-parser";
import userRoutes from "./routes/userRoutes";
import { connectDB } from "./database/connect";
import { apiLogger } from "./middlewares/apiLogger";

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(apiLogger); // Log API requests

// Routes
app.use("/api/users", userRoutes);

// Connect to Database
connectDB();

export default app;
