import express from "express";
import {
  getAllFilms,
  getFilm,
  getAllFilmsByCategory,
} from "../../controllers/films.controllers";

const filmsRouter = express.Router();

filmsRouter.get("/", getAllFilms);
filmsRouter.get("/:id", getFilm);
filmsRouter.get("/category/:route", getAllFilmsByCategory);

export { filmsRouter };
