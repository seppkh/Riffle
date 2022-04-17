import create from 'zustand';

const gameStates = {
  notStarted: "notStarted",
  running: "running",
  paused: "paused",
  ended: "ended",
}

// eraldi kaartide store
// func võtab sisse leveli ja annab õiged kaardid

const useStore = create(set => ({
  level: 1,
  timeLeft: 30,
  score: 0,
  gameState: gameStates.notStarted,
  increaseLevel: () => set(state => ({ level: state.level + 1 })),
  reset: () => set({ 
    level: 1, 
    timeLeft: 30, 
    score: 0,
    gameState: gameStates.notStarted }),
  tick: () => set(state => {
    if (state.timeLeft === 0) return;
    if (state.timeLeft === 1) {
      return {
        timeLeft: 0,
        gameState: gameStates.ended
      }
    }
    return { timeleft: state.timeLeft -1 }
  }),
  increaseScore: () => set(state => ({ 
    score: state.score + 1,
    timeLeft: state.timeLeft + 5 
  })),
  decreaseTime: () => set(state => { 
    const timeLeft = state.timeLeft - 3;
    if (timeLeft <= 0)  {
      return {
        timeLeft: 0,
        gameState: gameStates.ended
      }
    }
    return {
      timeLeft,
    }
  }),
  togglePause: () => set(state => { 
    if (state.gameState === gameStates.paused) {
      return {
        gameState: gameStates.running
      }
    }
    return { gameState: gameStates.paused }
  }),
  startGame: () => set(() => {
    return {
      gameState: gameStates.running
    }
  })


}))