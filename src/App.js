import React, { useState } from 'react';
import Recipes from './components/Recipes';
import Search from './components/Search';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="w-full h-full">
      <Search search={search} setSearch={setSearch} />
      <Recipes search={search} />
    </div>
  );
};

export default App;
