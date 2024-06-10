import client from "../client/greta.client";
import Film from "../models/film.model";
import User from "../models/user.model";

class UserService {
  constructor() {}

  async getUserInfo(email: string) {
    const sql = `SELECT * FROM users WHERE email = ?;`;

    try {
      const rows = (await client.query(sql, [email])) as User[];

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }

  async getUserFilms(email: string) {
    const sql = `SELECT * FROM films WHERE id_user = ?;`;

    try {
      const rows = (await client.query(sql, [email])) as Film[];

      if (rows.length === 0) {
        return null;
      }

      return rows;
    } catch (error) {
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }
  async getVideoclub(email: string) {
    const sql = `SELECT * FROM films WHERE id IN (SELECT id FROM videoclub WHERE email = ?);`;

    try {
      const rows = (await client.query(sql, [email])) as Film[];

      if (rows.length === 0) {
        return null;
      }

      return rows;
    } catch (error) {
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }
}
export default UserService;
