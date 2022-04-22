
import createSets from '../utils/createElementSets';
import levelSettings from './levelStore';

// create rootSliceStore, kus kogud kokku kõik related funktsioonid
// startGame running nupule vajutades, elemendid kuva
// timer jooksma

const createCardSlice = (set, get) => ({
  mainCard: {
    elements: []
  },
  card1: {
    elements: [],
    isMatch: false,
    isActive: true
  },
  card2: {
    elements: [],
    isMatch: false,
    isActive: true
  },
  card3: {
    elements: [],
    isMatch: false,
    isActive: true
  },
  levelSettings: levelSettings,
  
  assignCards: () => set((state) => {
    const cardsContent = createSets(
      state.levelSettings.mainCardElementCount, 
      state.levelSettings.cardElementCount, 
      state.levelSettings.matchingElementCount );
      
    return {
      mainCard: cardsContent.mainCard,
      card1: cardsContent.card1,
      card2: cardsContent.card2,
      card3: cardsContent.card3
    }
   }),

  deactivateCard: (clicked_card) => set(() => { 
    return {
      clicked_card: {...clicked_card, isActive: false },
    }
  }),

  activateCards: () => set(state => {
    return {
      card1: {...state.card1, isActive: true },
      card2: {...state.card2, isActive: true },
      card3: {...state.card3, isActive: true },
    }
   }),

})

export default createCardSlice;