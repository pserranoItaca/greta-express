import express from "express";
import {
  getUserInfo,
  getFilmsInfo,
  getVideoclub,
} from "../../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/dashboard/data/:email", getUserInfo);
userRouter.get("/dashboard/films/:email", getFilmsInfo);
userRouter.get("/videoclub/films/:email", getVideoclub);

export { userRouter };
