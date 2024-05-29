import express from "express";
import cors from "cors";
import { authRouter } from "./router/auth/auth.routes";
import { filmsRouter } from "./router/films/films.routes";
import { userRouter } from "./router/user/user.routes";

const app = express();

const PORT = 3010;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("active server");
});

app.use("/auth", authRouter);

app.use("/films", filmsRouter);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
