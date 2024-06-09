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
    const sqlLogin = `SELECT * FROM users WHERE email = ?;`;

    try {
      const rows = (await client.query(sqlLogin, [email])) as User[];

      console.log(rows);

      if (rows.length === 0) {
        return null;
      }

      const user = rows[0];

      const isPasswordValid = await bcrypt.compare(pass, user.pass);

      if (!isPasswordValid) {
        return null;
      }

      return user;
    } catch (error) {
      console.error("Error en la consulta login:", error);
      throw new Error("El login falló");
    }
  }

  async register(newUser: User): Promise<User | null> {
    const sqlCheckUser = `SELECT * FROM users WHERE email = ?;`;
    const sqlRegister = `INSERT INTO users (username, email, pass, avatar) VALUES (?, ?, ?, ?);`;

    try {
      const existingUser = (await client.query(sqlCheckUser, [
        newUser.email,
      ])) as User[];

      console.log(existingUser);

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

      return await this.login(newUser.email, newUser.pass);
    } catch (error) {
      console.error("Error en consulta al servidor:", error);
      throw new Error("Fallo en el registro");
    }
  }
  async update(updateUser: User) {
    const sql = `DELETE FROM users WHERE email = ?;`;

    try {
      await client.query(sql, [updateUser.email]);
      const hashedPassword = await bcrypt.hash(updateUser.pass, 10);

      const updated = await this.register({
        ...updateUser,
        pass: hashedPassword,
      });

      return updated;
    } catch (error) {
      console.error("Error en consulta al servidor:", error);
      throw new Error("Fallo en el registro");
    }
  }
}

export default AuthService;
