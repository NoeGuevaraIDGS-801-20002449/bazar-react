import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apimocha.com/bazar/api/items');
        const data = await response.json();
        const selectedProduct = data.products.find((item) => item.id === parseInt(id, 10));

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Product with id ${id} not found`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Cargando detalle de producto...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;