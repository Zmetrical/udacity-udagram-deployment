import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

(async () => {
  console.log("STEP 1");
  dotenv.config();
  
  console.log("STEP 2");
    try {
        console.log("STEP 3");
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        await sequelize.addModels(V0_FEED_MODELS);
        await sequelize.addModels(V0_USER_MODELS);

        console.log("STEP 5");
        await sequelize.sync();

        console.log("Database Connected");

    } catch (error) {
        console.error("DATABASE STARTUP ERROR:", error);
    }
  console.log("STEP 7");
  console.log("Database Connected");

  const app = express();
  const port = 8080;

  app.use(bodyParser.json());

  app.use(cors());
  app.options('*', cors()) // enable pre-flight requests  

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${process.env.URL}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
