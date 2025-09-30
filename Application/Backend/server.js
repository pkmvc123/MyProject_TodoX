import dotenv from "dotenv";
import express from "express";

import mainRouter from "./Sources/Routers/main_router.js";

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || "127.0.0.1";

server.use("/", mainRouter);

server.listen(port, hostname, () => {
  console.log(`Server running at: http://${hostname}:${port}`);
});
