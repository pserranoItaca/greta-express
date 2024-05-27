import express from "express";
import { login, register } from "../../controllers/auth.controllers";

const authRouter = express.Router();

authRouter.post("/login", login);

export { authRouter };
