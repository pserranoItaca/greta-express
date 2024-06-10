import client from "../client/greta.client";
import Film from "../models/film.model";
import Genre from "../models/genre.model";

class FilmsService {
  constructor() {}

  async getAllFilmsByCategory(category: string) {
    const sql =
      "SELECT * FROM films WHERE id IN (SELECT film_id FROM film_genre WHERE genre_id = (SELECT id FROM genres WHERE route = ?))";

    try {
      const rows = (await client.query(sql, [category])) as Film[];

      if (rows.length === 0) {
        return null;
      }

      return rows;
    } catch (error) {
      error;
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }

  async getFilmById(title: string) {
    const sql = `SELECT * FROM films WHERE id = ?`;

    try {
      const rows = (await client.query(sql, [title])) as Film[];
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    } catch (error) {
      error;
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }

  async getGenresById(id: string) {
    const sql = `SELECT * FROM genres WHERE id IN (SELECT genre_id FROM film_genre WHERE film_id = ? );`;

    try {
      const rows = (await client.query(sql, [id])) as Genre[];
      if (rows.length === 0) {
        return null;
      }
      return rows;
    } catch (error) {
      error;
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }

  async likeFilm(id: string, email: string) {
    const sql = `INSERT INTO videoclub (id, email) VALUES (?, ?);
    `;

    try {
      const rows = await client.query(sql, [email, id]);

      return true;
    } catch (error) {
      error;
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }
  async unLikeFilm(id: string, email: string) {
    const sql = `DELETE FROM videoclub WHERE id = ? AND email = ?;`;

    try {
      const rows = await client.query(sql, [email, id]);

      return rows;
    } catch (error) {
      error;
      console.error("Error al realizar la consulta :", error);
      throw new Error("GET de datos falló");
    }
  }

  async saveFilm(filmData: Film) {}
}

export default FilmsService;
