const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'huerto_automatizado',
    password: 'huerto12345',
    database: 'huerto_automatizado'
  });
}
