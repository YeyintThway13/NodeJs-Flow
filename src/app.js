import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use((req, res) => {
  res.status(404).send({ msg: "404 not found" });
});

// Routes
routes(app)

export default app;
