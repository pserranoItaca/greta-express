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
  async update(updateUser: User): Promise<User | null> {
    const sqlSelect = `SELECT * FROM users WHERE email = ?`;
    const sqlUpdate = `UPDATE users SET username = ?, pass = ?, avatar = ? WHERE id = ?`;
    try {
      const currentUser = (await client.query(sqlSelect, [
        updateUser.email,
      ])) as User[];

      if (!currentUser) {
        throw new Error("Usuario no encontrado");
      }

      const hashedPassword = await bcrypt.hash(updateUser.pass, 10);

      const newData: User = {
        id: updateUser.id,
        email: updateUser.email,
        avatar: updateUser.avatar || currentUser[0].avatar,
        username: updateUser.username || currentUser[0].username,
        pass: hashedPassword,
        active: false,
        deleted: false,
        created_at: "",
        updated_at: "",
        deleted_at: null,
      };

      await client.query(sqlUpdate, [
        newData.username,
        newData.pass,
        newData.avatar,
        newData.id,
      ]);

      (await client.query(sqlSelect, [newData.email])) as User;
      const response = (await client.query(sqlSelect, [
        updateUser.email,
      ])) as User[];
      return response[0];
    } catch (error) {
      console.error("Error en consulta al servidor:", error);
      throw new Error("Fallo en el registro");
    }
  }

  async deleteAcc(id: string): Promise<boolean> {
    const sqlDelete = `DELETE FROM users WHERE id = ?`;
    const sqlCheck = `SELECT * FROM users WHERE id = ?`;

    try {
      await client.query(sqlDelete, [id]);
      const check = (await client.query(sqlCheck, [id])) as any[];

      // Verificar si el usuario fue realmente eliminado
      if (check.length > 0) {
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error en consulta al servidor:", error);
      throw new Error("Fallo en consulta");
    }
  }
}
export default AuthService;
