
import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import Product from '/src/models/Product.js';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await DataStore.query(Product);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      { products.map((product) => (
        <div key={product.id}>
          <h2>{product.nome}</h2>
          <p>{product.descricao}</p>
          <p>{product.origem}</p>
          <p>{product.grao}</p>
          <p>{product.preco}</p>
          <img src={product.imagem} alt={product.nome} />
        </div>
      )) }
    </div>
  );
};

export default ProductList;