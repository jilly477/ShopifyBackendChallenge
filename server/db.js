const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "localhost",
    port: 5432,
    database: "shopify"
});

module.exports = pool;