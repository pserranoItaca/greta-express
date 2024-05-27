import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import User from "../models/user.model";

const login = async (req: Request, res: Response) => {
  const { user, pass } = req.headers;
  console.log(user);
  console.log(pass);
  console.log("done");
  const loged: string = "loged";
  res.send(loged);
  // const users = await AuthService.login("pablo", "A,XS0");
  // res.send(users);
};
const register = () => {};

export { login, register };
