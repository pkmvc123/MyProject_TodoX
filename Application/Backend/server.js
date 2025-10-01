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

if (process.env.NODE_ENV !== "production") {
  server.use(express.static("../Frontend/dist"));

  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
  });
}

server.use("/api", mainRouter);

server.listen(port, hostname, () => {
  console.log(`Server running at: http://${hostname}:${port}`);
});
