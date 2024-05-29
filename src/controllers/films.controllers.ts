import { Request, Response } from "express";
import FilmsService from "../services/films.service";

const service = new FilmsService();

const getAllFilms = async (req: Request, res: Response) => {
  try {
    const films = await service.getAllFilms();
    console.log(films);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
const getAllFilmsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    const films = await service.getAllFilmsByCategory(category);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

const getFilm = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const film = await service.getFilmById(id);
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export { getAllFilms, getAllFilmsByCategory, getFilm };
