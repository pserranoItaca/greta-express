import client from "../client/greta.client";
import User from "../models/user.model";
const bcrypt = require("bcryptjs");

interface LoginDTO {
  email: string;
  pass: string;
}
class AuthService {
  constructor() {}

  async login(email: string, pass: string): Promise<User | null> {
    const sqlLogin = `SELECT * FROM users WHERE email = ? AND pass = ?;`;

    try {
      const rows = (await client.query(sqlLogin, [email, pass])) as User[];

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.error("Error en la consulta login:", error);
      throw new Error("El login falló");
    }
  }

  async register(newUser: User): Promise<User | null> {
    const sqlCheckUser = `SELECT * FROM users WHERE email = ?;`;
    const sqlRegister = `INSERT INTO users (username, email, pass,avatar) VALUES (?, ?, ?, ?);`;

    try {
      const existingUser = (await client.query(sqlCheckUser, [
        newUser.email,
      ])) as User[];
      if (existingUser.length > 0) {
        return null;
      }

      const hashedPassword = await bcrypt.hash(newUser.pass, 10);

      await client.query(sqlRegister, [
        newUser.username,
        newUser.email,
        hashedPassword,
        newUser.avatar,
      ]);
      return await this.login(newUser.email, hashedPassword);
    } catch (error) {
      console.error("Error en consulta al servidor:", error);
      throw new Error("Fallo en el registro");
    }
  }
  async update(newUser: User): Promise<User | null> {
    const sql = `UPDATE users SET username = ?, pass = ?, avatar = ?  WHERE email = ? ;`;

    try {
      const hashedPassword = await bcrypt.hash(newUser.pass, 10);

      await client.query(sql, [
        newUser.username,
        hashedPassword,
        newUser.avatar,
        newUser.email,
      ]);
      return await this.login(newUser.email, hashedPassword);
    } catch (error) {
      console.error("Error en consulta al servidor:", error);
      throw new Error("Fallo en el registro");
    }
  }
}

export default AuthService;
