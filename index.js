const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3005;
const ip = '192.168.137.1';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World, this is my first server on express');
});

app.get('/home', (req, res) => {
  res.send('Bienvenidos a My Shop');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`http://${ip}:${port}/`);
});

routerApi(app);
