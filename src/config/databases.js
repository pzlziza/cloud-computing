require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.query("SELECT 1", (err, res) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connection successful:", res.rows);
  }
});

module.exports = pool;
