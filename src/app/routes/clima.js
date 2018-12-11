const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/clima', (req, res) => {
    connection.query('SELECT * FROM clima ORDER BY id DESC LIMIT 1 ', (err, result) => {
      if(err){
        console.log(err);
      }else{
        res.send({
          clima: result
        });
      }
    });
  });

  app.get('/clima-all', (req, res) => {
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
      if(err){
        res.send({
          error: 'Ha habido un error en la consulta a la base de datos'
        })
      }else{
        res.send({
          result: result,
          temperatura: temperatura,
          humedad: humedad
        });
      }
      
    });
  });
};
