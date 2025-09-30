import express from "express";

import {
  getTaskPage,
  createTask,
  updateTask,
  deleteTask,
} from "../Controllers/main_controller.js";

const mainRouter = express();

mainRouter.get("/", getTaskPage);

mainRouter.post("/api/createTask", createTask);

mainRouter.put("/api/updateTask/:id", updateTask);

mainRouter.delete("/api/deleteTask/:id", deleteTask);

export default mainRouter;
