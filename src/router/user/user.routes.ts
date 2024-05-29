import express from "express";

const userRouter = express.Router();

userRouter.get("/dashboar", getUserInfo);
userRouter.get("/videoclub", getVideoclub);

export { userRouter };
