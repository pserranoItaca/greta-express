import express, { response } from "express";
import cors from "cors";
import { authRouter } from "./router/auth/auth.routes";
import { filmsRouter } from "./router/films/films.routes";
import { userRouter } from "./router/user/user.routes";
import multer from "multer";
import fs from "node:fs";
import client from "./client/greta.client";
import Film from "./models/film.model";

const app = express();

const PORT = 3010;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const upload = multer({ dest: "./src/uploads" });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("active server");
});

app.use("/auth", authRouter);

app.use("/films", filmsRouter);

app.post("/upload", upload.single("filmFile"), async (req, res) => {
  try {
    console.log(req.body);
    const newData = JSON.parse(req.body.values);
    // const { id_user, descript, genre, art, poster, director, cast, sound } =
    //   newData;
    console.log(newData);

    const route = req.file ? saveImage(req.file) : null;

    const sql = `INSERT INTO films (id ,title, descript, id_user, director, art, sound, cast, route) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?);`;

    const film = await client.query(sql, [
      "999",
      newData.title,
      newData.descript,
      newData.id_user,
      newData.director,
      newData.art,
      newData.sound,
      newData.cast || "",
      route,
    ]);

    res.status(201).json(film);
  } catch (error) {
    console.error("Error al subir la película:", error);
    res.status(500).json({ error: "Error al subir la película" });
  }
});

const saveImage = (file: Express.Multer.File) => {
  const newPath = `./src/uploads/films/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  console.log(file.originalname);
  return newPath;
};

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
