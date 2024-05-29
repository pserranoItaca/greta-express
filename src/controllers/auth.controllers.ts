import { Request, Response } from "express";
import User from "../models/user.model";
import AuthService from "../services/auth.service";

const service = new AuthService();
type TestType = {
  email: string;
};

const login = async (req: Request, res: Response) => {
  try {
    const body = req.body as User;
    const user = await service.login(body.email, body.pass);

    res.status(201).send(user as User[]);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
const register = async (req: Request, res: Response) => {
  try {
    console.log(req.header);
    const newUser = req.body as User;
    const user = await service.register(
      newUser.email,
      newUser.username,
      newUser.pass
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export { login, register };
