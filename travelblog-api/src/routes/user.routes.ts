import express from "express";
const router = express.Router();
import { signUpHandler } from "../handlers/user.handlers";

router.post("/signup", signUpHandler);

export default router;
