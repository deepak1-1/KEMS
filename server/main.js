import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { ServerProtectedRouter, ServerPublicRouter } from "./router/index.js";

const PORT = process.env.PORT || "4001";
const app = express();
app.use("/server/static", express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/server", ServerPublicRouter);
app.use("/server", ServerProtectedRouter);

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});
