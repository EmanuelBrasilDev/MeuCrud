import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProductForm = ({ currentProduct, onSaved }) => {
  const [product, setProduct] = useState({ 
    name: '', 
    price: '', 
    description: '', 
    image: '' 
  });

  useEffect(() => {
    if (currentProduct) setProduct(currentProduct);
  }, [currentProduct]);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (product.id) {
        await api.put(`/products/${product.id}`, product);
      } else {
        await api.post('/products', product);
      }
      setProduct({ name: '', price: '', description: '', image: '' });
      onSaved();
    } catch (err) {
      console.error('Erro ao salvar produto:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nome"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Preço"
        type="number"
        step="0.01"
        value={product.price}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Descrição"
        value={product.description}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="URL da imagem"
        value={product.image}
        onChange={handleChange}
      />
      <button type="submit">{product.id ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default ProductForm;
