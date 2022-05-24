import './App.css';
import LandingScreen from './features/landingScreen';
import GameWithStores from './components/GameWithStores';
import Card from './components/CardLayout.js';
import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <Router>
      <div className='App'>
        <Card />
      </div>
    </Router>
  );
}

export default App;
