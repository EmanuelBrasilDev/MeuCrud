import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('Erro ao deletar produto:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(p => (
        <div className="product-card" key={p.id}>
          {p.image && <img className="product-image" src={p.image} alt={p.name} />}
          <div className="product-info">
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>
            <p className="description">{p.description}</p>
            <div className="product-actions">
              <button onClick={() => onEdit(p)}>Editar</button>
              <button onClick={() => handleDelete(p.id)}>Deletar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
