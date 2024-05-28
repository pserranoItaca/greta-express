import express from "express";
import { login, register } from "../../controllers/auth.controllers";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/sign-up", register);

export { authRouter };
