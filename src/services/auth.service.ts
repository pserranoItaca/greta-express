import client from "../client/greta.client";
import UserModel from "../models/user.model";

class AuthService {
  constructor() {}

  static async login(username: string, pass: string): UserModel {
    const sql = `SELECT * FROM users WHERE username = '${username}' AND pass = '${pass}';`;
    const rows = await client.query(sql);
  }
}
export default AuthService;
