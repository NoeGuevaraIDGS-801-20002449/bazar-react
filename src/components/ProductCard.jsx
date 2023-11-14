import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
      <Link to={`/item/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <p className="card-text">Category: {product.category}</p>
          <p className="card-text">Rating: {product.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
