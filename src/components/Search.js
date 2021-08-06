import React, { useState } from 'react';

const Search = ({ setSearch }) => {
  const [getSearch, setGetSearch] = useState('');

  const handleChange = (e) => {
    setGetSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(getSearch);
    setGetSearch('');
  };

  return (
    <div className="text-white w-full flex justify-center items-center p-10 ">
      <form className="text-white" onSubmit={handleSubmit}>
        <input
          autoFocus
          className="p-4 px-20 rounded-lg outline-none text-center bg-blue-600 text-white placeholder-white placeholder-opacity-50"
          type="text"
          placeholder="Search your fav recipe!"
          onChange={handleChange}
          value={getSearch}
        />
      </form>
    </div>
  );
};

export default Search;
