import express from "express";

const configEnginer = (app) => {
  // View Engine
  // app.set("views", path.join(__dirname, "../views"));
  // app.set("view engine", "ejs");
  // Static file
  // app.use(express.static(path.join(__dirname, "../public")));
  // Config Request Body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Config Set Layout
  // app.use(expressLayouts);
  // app.set("layout", "layouts/main");
  // Config Session
  /*
  app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );
  */
};

export default configEnginer;
