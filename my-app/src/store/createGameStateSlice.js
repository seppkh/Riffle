
const gameStates = {
  notStarted: "notStarted",
  running: "running",
  paused: "paused",
  ended: "ended",
  flashcard: "flashcard",
  menu: "menu"
}


const createGameSlice = (set, get) => ({
  level: 0,
  score: 0,
  timeLeft: 7,
  timeLeftBonus: 3,
  gameState: gameStates.menu,
  increaseLevel: () => set(state => ({ level: state.level + 1 })),
  resetCounters: () => set({ 
    level: 0, 
    score: 0,
    timeLeft: 7, 
    timeLeftBonus: 3 
  }),
  tick: () => set(state => {
    if (state.timeLeft === 0) return;
    if (state.timeLeft === 1) {
      return {
        timeLeft: 0,
        gameState: gameStates.ended
      }
    }
    return { timeLeft: state.timeLeft -1 }
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
  startGame: () => set(() => {
    return {
      gameState: gameStates.running,
      level: 1,
    }
  }),
  setGameStateToNotStarted: () => set(() => {
    return { gameState: gameStates.notStarted }
  }),
  setGameStateToMenu: () => set(() => {
    return { gameState: gameStates.menu }
  }),
  togglePause: () => set(state => { 
    if (state.gameState === gameStates.paused) {
      if (state.timeLeft === 0) {
        return {
          gameState: gameStates.ended
        }
      }
      return {
        gameState: gameStates.running
      }
    }
    return { gameState: gameStates.paused }
  }),
  toggleFlashcard: () => set(state => { 
    if (state.gameState === gameStates.flashcard) {
      return {
        timeLeft: 7,
        gameState: gameStates.running
      }
    }
    return { gameState: gameStates.flashcard }
  }),
  tickBonus: () => set(state => {
    if (state.timeLeft <= 0) return;
    if (state.timeLeftBonus <= 0.1) return { timeLeftBonus: 0};
    return { timeLeftBonus: (state.timeLeftBonus -0.0250).toFixed(2) }
  }),
  resetTimeLeftBonus: () => set(state => {
    return { timeLeftBonus: 3 }
  }),
  increaseScoreBonus: () => set(state => ({ 
    score: state.score + 3,
    timeLeft: state.timeLeft + 5 
  })),
  
})

export default createGameSlice;