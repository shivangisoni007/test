import React from 'react';
import Search from './Search';
import List from './List';

const App = () => {
  return (
   <>
    <div className="row">
      <div className=" col-3 ml-4 p-4">
        <Search/>
      </div>
    </div>

    <div className="row">
      <div className="col-8 p-4">
        <List/>
      </div>

    </div>
   </>
  );
}

export default App;
