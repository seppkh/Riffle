
const soundStates = {
  notMute: true,
  mute: false,
}

const createSoundsSlice = (set, get) => ({
  soundState: soundStates.notMute,
  soundPlaying: false,
  backgroundSoundState: true,
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
  toggleBackgroundSound: () => set((state) => {
    if (state.backgroundSoundState === soundStates.notMute) {
      return {
        backgroundSoundState: soundStates.mute
      }
    }
    return { 
      backgroundSoundState: soundStates.notMute
    }
  }),
  setBackgroundSoundToTrue: () => set(() => {
    return { backgroundSoundState: true }
  }),
  setBackgroundSoundToFalse: () => set(() => {
    return { backgroundSoundState: false }
  }),
})


export default createSoundsSlice;