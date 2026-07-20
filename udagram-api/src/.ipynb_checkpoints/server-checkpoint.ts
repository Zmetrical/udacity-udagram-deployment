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
        console.log("DB HOST:", process.env.POSTGRES_HOST);
        console.log("DB DB:", process.env.POSTGRES_DB);
        console.log("DB USER:", process.env.POSTGRES_USERNAME);
        
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        console.log("STEP 4");
        await sequelize.addModels(V0_FEED_MODELS);
        await sequelize.addModels(V0_USER_MODELS);

        console.log("STEP 5");
        await sequelize.sync();

        console.log("Database Connected");
        
    } catch (error: any) {
        console.error("DATABASE STARTUP ERROR:");
        console.error(error);
        console.error(error.message);
        console.error(error.stack);
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
