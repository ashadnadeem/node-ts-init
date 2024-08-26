import { Router } from "express";
import { getUsers, createUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers); // GET /api/users - Get all users
router.post("/", createUser); // POST /api/users - Create a new user

export default router;
