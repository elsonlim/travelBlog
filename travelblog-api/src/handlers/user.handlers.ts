import express from "express";
import mongoose from "mongoose";
import "../models/user.model";

const User = mongoose.model("User");

const createUser = async (email: string, password: string) => {
  const newUser = await new User({
    email,
    password,
  });
  newUser.save();
};

export const signUpHandler = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { email, password } = req.body;
  try {
    await createUser(email, password);
    res.json({ email });
  } catch (e) {
    next(e);
  }
};
