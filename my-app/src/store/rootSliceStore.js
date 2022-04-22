import create from 'zustand';

import createGameSlice from './createGameStateSlice';
import createCardSlice from './createCardSlice';

const useStoreSlices = create((set, get) => ({
  ...createGameSlice(set, get),
  ...createCardSlice(set, get),
  
}));

export default useStoreSlices;