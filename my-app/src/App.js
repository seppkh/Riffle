import './App.css';
import LandingScreen from './features/landingScreen';
import GameWithStores from './components/GameWithStores';
import Card from './components/CardLayout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instructions from './features/menu/Instructions';

import React from 'react';
import SplashScreenLayout from './layouts/SplashScreenLayout';
import Intro from './features/menu/Intro';
import Credits from './features/menu/Credits';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LandingScreen />}>
            <Route path='/' element={<Intro />} />
            <Route path='/instructions' element={<Instructions />} />
            <Route path='/credits' element={<Credits />} />
          </Route>
          <Route element={<SplashScreenLayout />}>
            <Route path='/game' element={<GameWithStores />} />
          </Route>
          <Route path='/card' element={<Card />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
