import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h4>App</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default App; 