import express from "express";

import { getIndexPage } from "../Controllers/main_controller.js";

const mainRouter = express();

mainRouter.get("/", getIndexPage);

export default mainRouter;
