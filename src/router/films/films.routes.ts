import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import {
  getFilm,
  getGenres,
  getCategoryFilms,
  // likeFilm,
  unLikeFilm,
  uploadFilm,
} from "../../controllers/films.controllers";

const filmsRouter = express.Router();

filmsRouter.get("/:id", getFilm);

filmsRouter.get("/genres/:id", getGenres);

filmsRouter.post("/unlike/:id", unLikeFilm);

filmsRouter.get("/category/:slug", getCategoryFilms);

// filmsRouter.post("/:id", likeFilm);

// filmsRouter.post(
//   "/upload/film",
//   upload.fields([
//     { name: "filmFile", maxCount: 1 },
//     { name: "posterFile", maxCount: 1 },
//     { name: "values", maxCount: 1 },
//   ]),
//   uploadFilm
// );

filmsRouter.get("/resource/:name", async (req: Request, res: Response) => {
  const fileName = req.params.name;
  const filePath = path.resolve(__dirname, `../../uploads/films/${fileName}`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File doesn't exist: ${err}`);
      res.status(404).send("File not found");
    } else {
      res.setHeader("Content-Type", "video/mp4").sendFile(filePath);
    }
  });
});

filmsRouter.get(
  "/resource/poster/:name",
  async (req: Request, res: Response) => {
    const fileName = req.params.name;
    const filePath = path.resolve(
      __dirname,
      `../../uploads/poster/${fileName}`
    );

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`File doesn't exist: ${err}`);
        res.status(404).send("File not found");
      } else {
        res.setHeader("Content-Type", "image/png").sendFile(filePath);
      }
    });
  }
);

export { filmsRouter };
