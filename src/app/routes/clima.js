const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/clima', (req, res) => {
    connection.query('SELECT * FROM clima', (err, result) => {
      if (err){
        console.log(err);
      }
      res.send({
        clima: result
      });
    });
  });

  app.post('/clima', (req, res) => {
    console.log(req.body);
    const { temperatura, humedad } = req.body;
    connection.query('INSERT INTO clima SET ? ',
      {
        temperatura,
        humedad
      }
    , (err, result) => {
      res.send({
        result: result
      });
    });
  });
};
