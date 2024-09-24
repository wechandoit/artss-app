const { Pool } = require("pg");
const pool = new Pool({
  host: "db",
  port: 5432,
  user: "renabi",
  password: "change",
});

module.exports = pool;
