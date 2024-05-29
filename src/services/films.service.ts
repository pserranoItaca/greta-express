import client from "../client/greta.client";
import Film from "../models/film.model";

class FilmsService {
  constructor() {}

  async getAllFilms() {
    const sql = "SELECT * FROM films;";

    try {
      const rows = await client.query(sql);

      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllFilmsByCategory(category: string) {
    // const sql = `SELECT * FROM films JOIN genres WHERE route = ${category};`;
    const sql = `SELECT * FROM films JOIN genres WHERE route = '${category}';`;

    try {
      const rows = await client.query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFilmById(id: number) {
    const sql = `SELECT * FROM films WHERE id = ${id}`;
    try {
      const rows = await client.query(sql);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default FilmsService;
