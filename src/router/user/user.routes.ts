import express from "express";
import { getUserInfo, getFilmsInfo } from "../../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/dashboard/data/:email", getUserInfo);
userRouter.get("/dashboard/films/:email", getFilmsInfo);

export { userRouter };
