const express = require('express');

const cliente = require('../model/Cliente');

const router = express.Router();

const existe = router.get('/cliente/:email', (req, res) => {
  const { email } = req.params;

  cliente.findAll({ where: { email } }).then((usuario) => {
    res.status(200).json(usuario);
  });
});

router.post('/cliente', (req, res) => {
  const { nome, sobrenome, email, celular } = req.body;

  if (existe == true) {
    cliente
      .create({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        celular: celular,
      })
      .then((cliente) => {
        res.status(200).json('Usuário cadastrado');
      });
  } else {
    return res.status(200).json('Usuário já existe');
  }
});

module.exports = router;
