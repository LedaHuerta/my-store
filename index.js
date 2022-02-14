const express = require('express');
const app = express();
const port = 3005;
const ip = '192.168.137.1';

app.get('/', (req, res) => {
  res.send('Hello World, this is my first server on express');
});

app.listen(port, () => {
  // console.log('My port: ', port);
  console.log(`Listening on port ${port}`);
  console.log(`http://${ip}:${port}/`);
});
