import User from "../model/userModel";
import createError from "http-errors";

export const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw createError.InternalServerError("Error fetching users");
  }
};

export const addUser = async (userData: { name: string; email: string; password: string }) => {
  try {
    const user = User.create(userData);
    return user;
  } catch (error) {
    throw createError.InternalServerError("Error creating user");
  }
};
