import { Request, Response } from "express";
import UserService from "../services/user.service";

const service = new UserService();

const getUserInfo = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    email;

    const userInfo = await service.getUserInfo(email);
    userInfo;
    if (userInfo) {
      res.status(200).json(userInfo);
    } else {
      res.status(401).json({ message: "No access to the resource" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getFilmsInfo = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    email;
    const userFilms = await service.getUserFilms(email);

    if (userFilms) {
      res.status(200).json(userFilms);
    } else {
      res.status(401).json({ message: "No access to the resource" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getUserInfo, getFilmsInfo };
