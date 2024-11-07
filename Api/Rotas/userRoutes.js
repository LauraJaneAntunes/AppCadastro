const express = require('express');
const router = express.Router();

let users = [];

// Rota para cadastro de usuário
router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }

    const newUser = { nome, email, senha };
    users.push(newUser);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
});

module.exports = router;

// Rota para consulta de usuários (retornar todos os usuários cadastrados)
router.get('/consulta', (req, res) => {
  if (users.length === 0) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
  }

  res.status(200).json(users);
});

module.exports = router;