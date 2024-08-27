import { Request, Response } from "express";
import { getAllUsers, addUser } from "../services/userService";
import { Header, ResponseJson } from "../utils/structure";
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    const header = Header(false);
    const body = {
      message: "Users fetched successfully",
      users: users,
    };
    const response = ResponseJson(header, body);
    res.send(response);
  } catch (error: any) {
    const header = Header(true, error.errorCode, error.message, error.stack);
    const response = ResponseJson(header);
    res.send(response);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await addUser(req.body);
    const header = Header(false);
    const response = ResponseJson(header, newUser);
    res.send(response);
  } catch (error: any) {
    const header = Header(true, error.errorCode, error.message, error.stack);
    const response = ResponseJson(header);
    res.status(500).json(response);
  }
};
