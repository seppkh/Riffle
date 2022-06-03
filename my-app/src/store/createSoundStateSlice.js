
const soundStates = {
  notMute: true,
  mute: false,
}

const createSoundsSlice = (set, get) => ({

  soundState: soundStates.notMute,
  soundPlaying: false,
  toggleSound: () => set((state) => {
    if (state.soundState === soundStates.notMute) {
      return {
        soundState: soundStates.mute
      }
    }
    return { 
      soundState: soundStates.notMute
    }
  }),
  
})

export default createSoundsSlice;