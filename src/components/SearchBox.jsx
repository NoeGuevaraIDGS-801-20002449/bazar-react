import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs"; 

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/items?search=${searchTerm}`);
  };

  return (
    <div className="mb-4">
      
      <div className="input-group">
      <img src="/img/bazarBag.png" alt="Bazar Bag" style={{ width: '38px', height: '38px', marginRight: '10px' }} /><input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSearch}>
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
