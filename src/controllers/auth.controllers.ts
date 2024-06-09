import { Request, Response } from "express";
import User from "../models/user.model";
import AuthService from "../services/auth.service";

const service = new AuthService();

const login = async (req: Request, res: Response) => {
  try {
    const body = req.body as { email: string; pass: string };
    console.log(body);
    const user = await service.login(body.email, body.pass);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const body = req.body as User;
    const user = await service.register(body);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const body = req.body as User;
    const user = await service.update(body);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAcc = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const success = await service.deleteAcc(userId);
    if (success) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error en consulta al servidor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { login, register, update, deleteAcc };
