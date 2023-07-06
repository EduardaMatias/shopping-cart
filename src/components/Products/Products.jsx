import React, { useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => setProducts(response));
  }, []);

  return (
    <section className="products container">
      {products.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </section>
  );
}

export default Products;
