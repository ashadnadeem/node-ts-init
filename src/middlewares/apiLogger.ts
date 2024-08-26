import { Request, Response, NextFunction } from "express";
import Log from "../models/logModel";
import { config } from "../config"; // Assuming you have environment configuration

export const apiLogger = async (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  // Flag to track whether logging has already been done
  let logCreated = false;

  // Capture the original response send function
  const originalSend = res.send;

  // Modify the response `send` function to log response details
  res.send = function (body?: any): any {
    if (!logCreated) {
      const responseTime = Date.now();
      const latency = responseTime - startTime;

      const logData = {
        table: req.originalUrl,
        event: req.method,
        env: config.env, // e.g., 'development' or 'production'
        params: req.params,
        request: req.body,
        response: body ?? {},
        uid: "user_id", // Assuming you have a user ID from the token
        timestamp: new Date(startTime),
        response_timestamp: new Date(responseTime),
        latency,
      };

      console.log(logData);

      // Save the log to the database
      Log.create(logData)
        .then(() => {
          console.log("Log saved successfully");
        })
        .catch((err) => {
          console.error("Error saving log:", err);
        });

      // Set the flag to true after logging
      logCreated = true;
    }

    // Call the original send function with the original body
    return originalSend.call(this, body);
  };

  next();
};
