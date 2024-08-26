import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw createError.Unauthorized("No token provided");
  }

  // Validate token logic (e.g., using JWT)
  // Assuming token is valid, call next()
  next();
};
