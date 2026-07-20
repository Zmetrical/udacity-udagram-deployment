// testdb.js
const { Client } = require("pg");

const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect()
.then(() => {
  console.log("CONNECTED");
  return client.end();
})
.catch(err => {
  console.error("FAILED");
  console.error(err);
});