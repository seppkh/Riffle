
const gameStates = {
  notStarted: "notStarted",
  running: "running",
  paused: "paused",
  ended: "ended",
  flashcard: "flashcard"
}

const soundStates = {
  notMute: true,
  mute: false,
}

const createGameSlice = (set, get) => ({
  level: 1,
  score: 0,
  timeLeft: 30,
  timeLeftBonus: 3,
  gameState: gameStates.notStarted,
  soundState: soundStates.notMute,
  increaseLevel: () => set(state => ({ level: state.level + 1 })),
  reset: () => set({ 
    level: 1, 
    score: 0,
    timeLeft: 30, 
    timeLeftBonus: 3,
    gameState: gameStates.notStarted }),
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
  startGame: () => set(() => {
    return {
      gameState: gameStates.running
    }
  }),
  toggleSound: () => set(state => {
    if (state.soundState === soundStates.notMute) {
      return {
        soundState: soundStates.mute
      }
    }
    return { 
      soundState: soundStates.notMute
    }
  }),
  exit: () => set(() => {
    return {
      
    }
  }),
  toggleFlashcard: () => set(state => { 
    if (state.gameState === gameStates.flashcard) {
      return {
        timeLeft: 30,
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