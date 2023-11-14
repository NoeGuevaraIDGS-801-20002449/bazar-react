import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import { FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa';

const ProductDetail = ({ product }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareOnSocialMedia = (platform) => {
    // Implement share logic for the selected platform
    console.log(`Share on ${platform}`);
  };

  return (
    <div className="container mt-5">
      <SearchBox />
      <div className="card mx-auto" style={{ maxWidth: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ maxHeight: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Brand: {product.brand}</p>
          <p className="card-text">Stock: {product.stock}</p>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: '#007bff', borderRadius: '5px', padding: '8px 16px', marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => console.log('Buy Now button clicked')}
          >
            Comprar
          </button>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button
                className="btn btn-outline-secondary"
                style={{ borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
                onClick={toggleShareOptions}
              >
                <FaShareAlt style={{ marginRight: '5px' }} /> Compartir
              </button>
              {showShareOptions && (
                <div className="d-flex mt-2">
                  <button
                    className="btn btn-outline-primary ml-2"
                    style={{ borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
                    onClick={() => shareOnSocialMedia('Facebook')}
                  >
                    <FaFacebook />
                  </button>
                  <button
                    className="btn btn-outline-info ml-2"
                    style={{ borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
                    onClick={() => shareOnSocialMedia('Twitter')}
                  >
                    <FaTwitter />
                  </button>
                  <button
                    className="btn btn-outline-danger ml-2"
                    style={{ borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
                    onClick={() => shareOnSocialMedia('Instagram')}
                  >
                    <FaInstagram />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
