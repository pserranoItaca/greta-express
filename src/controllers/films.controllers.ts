import { Request, Response } from "express";
import FilmsService from "../services/films.service";
import Film from "../models/film.model";

const service = new FilmsService();

const uploadFilm = async (req: Request, res: Response, route: string) => {
  console.log(req.files);
  res.send("Termina");
};
const getAllFilmsByCategory = async (req: Request, res: Response) => {
  try {
    const category = req.body as { slug: string };

    console.log(category);
    const films = await service.getAllFilmsByCategory(category.slug);
    console.log(films);

    if (films) {
      res.status(200).json(films);
    } else {
      res.status(401).json({ message: "No access to the resource" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFilm = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(id);

    const film = await service.getFilmById(id);
    console.log(film);

    if (film !== null) {
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: "Película no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const getGenres = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const genres = await service.getGenresById(id);

    if (genres !== null) {
      res.status(200).json(genres);
    } else {
      res.status(404).json({ message: "Genero no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
const likeFilm = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log(email);
    const idFilm = req.params.id;
    console.log(idFilm);

    const response = await service.likeFilm(email, idFilm);
    console.log(response);

    if (response) {
      res.status(200);
    } else {
      res.status(401).json({ message: "No access to the resource" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const unLikeFilm = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log(email);
    const idFilm = req.params.id;
    console.log(idFilm);

    const response = await service.unLikeFilm(email, idFilm);
    console.log(response);

    if (response) {
      res.status(200);
    } else {
      res.status(401).json({ message: "No access to the resource" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  uploadFilm,
  getAllFilmsByCategory,
  getFilm,
  getGenres,
  likeFilm,
  unLikeFilm,
};
