import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox';

const Results = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const [allProducts, setAllProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apimocha.com/bazar/api/items');
        const data = await response.json();
        setAllProducts(data.products);


        const filteredResults = data.products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ marginTop: '30px' }}>
      <SearchBox />
      <h2 className="mt-3 mb-3">Resultados de Busqueda</h2>
      <p>Numero de resultados: {results.length}</p>
      <div className="row">
        {results.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
