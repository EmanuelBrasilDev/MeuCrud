const db = require('../db');

const Product = {
  getAll: (callback) => {
    db.query('SELECT * FROM products', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query(
      'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      [data.name, data.price, data.description],
      callback
    );
  },
  update: (id, data, callback) => {
    db.query(
      'UPDATE products SET name=?, price=?, description=? WHERE id=?',
      [data.name, data.price, data.description, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM products WHERE id=?', [id], callback);
  },
};

module.exports = Product;
