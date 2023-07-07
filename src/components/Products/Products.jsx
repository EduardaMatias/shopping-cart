import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
import Pagination from '../Pagination/Pagination';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 8;
  const pages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage + itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  return (
    (loading && <Loading />) || (
      <section>
        <div className="products container">
          {currentItems.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>

        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </section>
    )
  );
}

export default Products;
