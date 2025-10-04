import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>🛒 Meu Catálogo de Produtos</h1>
      </header>
      <main>
        <ProductForm />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
