import React from 'react';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
       <img src="/img/bazarBag.png" alt="Bazar Bag" style={{ width: '100px', height: '100px' }} />
      <h1 className="mt-3 mb-3">Bienvenido a bazar Online</h1>
      <SearchBox />
     
    </div>
  );
};

export default Home;