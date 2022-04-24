
import createSets from '../utils/createElementSets';
import levelSettings from './levelSettings';

// create rootSliceStore, kus kogud kokku kõik related funktsioonid
// startGame running nupule vajutades, elemendid kuva
// timer jooksma

const createCardSlice = (set, get) => ({
  mainCard: {
    elements: []
  },
  card1: {
    title: "card1",
    elements: [],
    isMatch: false,
    isActive: true
  },
  card2: {
    title: "card2",
    elements: [],
    isMatch: false,
    isActive: true
  },
  card3: {
    title: "card3",
    elements: [],
    isMatch: false,
    isActive: true
  },
  levelSettings: levelSettings,
  
  assignCards: () => set((state) => {
    const {mainCardElementCount, cardElementCount, matchingElementCount } = levelSettings[state.level];

    const cardsContent = createSets( mainCardElementCount, cardElementCount, matchingElementCount);
      
    return {
      mainCard: cardsContent.mainCard,
      card1: {title: "card1", ...cardsContent.card1},
      card2: {title: "card2", ...cardsContent.card2,},
      card3: {title: "card3", ...cardsContent.card3}
    }
   }),

  deactivateCard: (clicked_card) => set((state) => {

    const title = clicked_card.title;

    if (title === "card1") {
      return {
        card1: {...state.card1, isActive: false },
      }
    }
    if (title === "card2") {
      return {
        card2: {...state.card2, isActive: false },
      }
    }
    if (title === "card3") {
      return {
        card3: {...state.card3, isActive: false },
      }
    }
   
  }),

  activateCards: () => set(state => {
    return {
      card1: {...state.card1, isActive: true },
      card2: {...state.card2, isActive: true },
      card3: {...state.card3, isActive: true },
    }
   }),
   
   unAssignCards: () => set((state) => {
    
    return {
      mainCard: {
        elements: []
      },
      card1: {
        title: "card1",
        elements: [],
        isMatch: false,
        isActive: true
      },
      card2: {
        title: "card2",
        elements: [],
        isMatch: false,
        isActive: true
      },
      card3: {
        title: "card3",
        elements: [],
        isMatch: false,
        isActive: true
      }
    }
   }),

})

export default createCardSlice;