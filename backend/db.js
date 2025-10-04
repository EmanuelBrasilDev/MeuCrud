const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // seu usuário MySQL
  password: 'Manel.19',       // sua senha MySQL
  database: 'MeuCrudNovo' // nome do banco que você criou
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;
