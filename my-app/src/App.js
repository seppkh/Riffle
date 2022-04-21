import './App.css';
import LandingScreen from './features/landingScreen';
import GameWithStores from './components/GameWithStores';
import React from 'react';

function App() {
  return (
    <>
      <div className='App'>
        <LandingScreen />
        <header className='App-header'>
          <GameWithStores />
        </header>
      </div>
    </>
  );
}

export default App;
