const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3005;
const ip = '192.168.137.1';

app.use(express.json());
const whitelist = ['http://127.0.0.1:5500', 'http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No tiene permiso para acceder'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello World, this is my first server on express');
});

app.get('/home', (req, res) => {
  res.send('Bienvenidos a My Shop');
});

routerApi(app);
//Los middleware de tipo error se deben poner después de definir el routing
//En el orden en que se pongan aquí, es como se van a ejecutar.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`http://${ip}:${port}/api/v1`);
  console.log(`http://localhost:${port}/api/v1`);
});
