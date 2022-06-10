const express = require('express');

const cliente = require('../model/Cliente');

const router = express.Router();

router.post('/cliente', (req, res) => {
  const { nome, sobrenome, email, celular } = req.body;

  cliente
    .create({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      celular: celular,
    })
    .then((cliente) => {
      res.status(200).json(cliente);
    });
});

module.exports = router;
