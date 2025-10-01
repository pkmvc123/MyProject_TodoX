import express from "express";
import dotenv from "dotenv";
dotenv.config();

import {
  getTaskPage,
  createTask,
  updateTask,
  deleteTask,
} from "../Controllers/main_controller.js";

const mainRouter = express();

mainRouter.get("/getTask", getTaskPage);

mainRouter.post("/createTask", createTask);

mainRouter.put("/updateTask/:id", updateTask);

mainRouter.delete("/deleteTask/:id", deleteTask);

export default mainRouter;
