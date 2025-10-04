const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/products', productRoutes);

// Rota raiz opcional
app.get('/', (req, res) => {
  res.send('API do CRUD de Produtos funcionando!');
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
