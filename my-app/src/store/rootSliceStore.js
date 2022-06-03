import create from 'zustand';

import createGameSlice from './createGameStateSlice';
import createCardSlice from './createCardSlice';
import createSoundsSlice from './createSoundStateSlice';

const useStoreSlices = create((set, get) => ({
  ...createGameSlice(set, get),
  ...createCardSlice(set, get),
  ...createSoundsSlice(set, get),
  
}));

export default useStoreSlices;