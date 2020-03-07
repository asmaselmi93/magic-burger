import React from 'react';
import './App.css';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Toolbar from './components/Toolbar/Toolbar'


function App() {
  return (
    <div>
      <Toolbar />
      <BurgerBuilder />

    </div>
  );
}

export default App;
