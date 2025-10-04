const express = require('express');
const router = express.Router();
const connection = require('../db'); // seu db.js com conexão MySQL

// Listar todos os produtos
router.get('/', (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Listar produto por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
});

// Criar produto
router.post('/', (req, res) => {
  const { name, price, description, image } = req.body;
  const sql = 'INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, price, description, image], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name, price, description, image });
  });
});

// Atualizar produto
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;
  const sql = 'UPDATE products SET name = ?, price = ?, description = ?, image = ? WHERE id = ?';
  connection.query(sql, [name, price, description, image, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ id, name, price, description, image });
  });
});

// Deletar produto
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM products WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Produto deletado com sucesso!' });
  });
});

module.exports = router;
