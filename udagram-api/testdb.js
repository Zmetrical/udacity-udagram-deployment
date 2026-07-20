const { Client } = require("pg");

const client = new Client({
  host: "database-1.ctac48mugayf.ap-southeast-2.rds.amazonaws.com",
  port: 5432,
  user: "postgres",
  password: "Udagram123",
  database: "postgres",
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