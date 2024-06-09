import express from "express";
import {
  deleteAcc,
  login,
  register,
  update,
} from "../../controllers/auth.controllers";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/sign-up", register);
authRouter.post("/update", update);
authRouter.delete("/delete/:id", deleteAcc);

export { authRouter };
