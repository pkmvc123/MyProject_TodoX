import express from "express";
import path from "path";

const __dirname = path.resolve();

const configEnginer = (app) => {
  // Static file
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  // Config Request Body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default configEnginer;
