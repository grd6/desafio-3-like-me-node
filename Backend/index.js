import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { PORT } from "./db/config.js";
import router from "./router/postsRoutes.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡Sever on⚡ http:/localhost:${PORT} `);
});
