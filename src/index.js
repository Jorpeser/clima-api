const app = require('./config/server');

require('./app/routes/clima')(app);

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
