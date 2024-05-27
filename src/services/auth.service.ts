import client from "../client/greta.client";
import User from "../models/user.model";

class AuthService {
  constructor() {}

  static async login(username: string, pass: string) {
    const sql = `SELECT * FROM users WHERE username = '${username}' AND pass = '${pass}';`;
    const rows = (await client.query(sql)) as User[];
    console.log(rows.length);
  }
}
export default AuthService;
