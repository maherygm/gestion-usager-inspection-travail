import React, { useEffect, useState } from 'react';
import dataService from './fetch/exempleData'; // Importe le service dataService

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Charge la liste de produits lorsque le composant est monté
    const fetchData = async () => {
      try {
        const productList = await dataService.getList();
        setProducts(productList);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
