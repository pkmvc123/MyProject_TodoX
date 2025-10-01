import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import mainRouter from "./Sources/Routers/main_router.js";
import viewEnginer from "./Sources/Configs/viewEnginer.js";

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || "127.0.0.1";

viewEnginer(server);
server.use(cors({ origin: "http://localhost:5173" }));

server.use("/api", mainRouter);

server.listen(port, hostname, () => {
  console.log(`Server running at: http://${hostname}:${port}`);
});
