import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: Number(process.env.POSTGRES_PORT || 5432),

  pool: {
    acquire: 10000,
    idle: 1000,
    max: 5,
    min: 0
  },
  dialect: "postgres",

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }

});