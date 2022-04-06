// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import './App.css';
import Game from './components/Game';
import React, { useState } from 'react';
import Timer from './components/Countdown';

function App() {
  /*
  state.gameOver = false;

  function handleGameOverStatus(state) {
    setGameOver(() => state);
  } 
*/
   return (
    <div className="App">
      <header className="App-header">
       
        <Game  />
        
      </header>
    </div>
  );
}

export default App;
