require('dotenv').config();
const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE
    }
});

module.exports = knex