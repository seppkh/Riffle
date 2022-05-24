import './App.css';
import LandingScreen from './features/landingScreen';
import GameWithStores from './components/GameWithStores';
import Card from './components/CardLayout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path='/game' element={<GameWithStores />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
