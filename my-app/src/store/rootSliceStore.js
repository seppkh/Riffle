import create from 'zustand';

import createGameSlice from './createGameStateSlice';
import createCardSlice from './createCardSlice';
import createSoundsSlice from './createSoundStateSlice';
import createCardGridSlice from './createCardGridSlice';

const useStoreSlices = create((set, get) => ({
  ...createGameSlice(set, get),
  ...createCardSlice(set, get),
  ...createSoundsSlice(set, get),
  ...createCardGridSlice(set, get)
  
}));

export default useStoreSlices;