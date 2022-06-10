const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const clienteController = require('./controller/ClienteController');
app.use('/', clienteController);

app.listen(3000, () => {
  console.log('Server is listening on port: http://localhost:3000');
});
