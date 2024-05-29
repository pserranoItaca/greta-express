import client from "../client/greta.client";
import User from "../models/user.model";

class AuthService {
  constructor() {}

  async login(email: string, pass: string) {
    const sql = `SELECT email FROM users WHERE email = '${email}' AND pass = '${pass}';`;

    try {
      const email = await client.query(sql);
      return email;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async register(email: string, user: string, pass: string) {
    const newUser: User = {
      id: 0,
      username: user,
      email: email,
      pass: pass,
      active: true,
      deleted: false,
      created_at: new Date().toUTCString(),
      updated_at: new Date().getTime().toString(),
      deleted_at: null,
    };

    const sql = `INSERT INTO users (username,email,pass,active,deleted) VALUES ('${newUser.username}','${newUser.email}','${newUser.pass}',${newUser.active},${newUser.deleted});`;

    try {
      await client.query(sql);
      return newUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default AuthService;
