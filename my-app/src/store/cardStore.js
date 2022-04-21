import create from 'zustand';
import levelSettings from '../assets/levelSettings';
import useStoreGame from './gameStateStore';
import createSets from '../utils/createElementSets';

// eraldi kaartide store
// func võtab sisse leveli ja annab õiged kaardid

const useStoreCards = create(set => ({
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
  level: useStoreGame(state => state.level),
  
  assignCards: () => set(() => {
    const cardsContent = createSets(
      levelSettings.level.mainCardElementCount, levelSettings.level.cardElementCount, levelSettings.level.matchingElementCount );
      
    return {
      mainCard: cardsContent.mainCard,
      card1: cardsContent.card1,
      card2: cardsContent.card2,
      card3: cardsContent.card3
    }
   }),

  deactivateCard: (clicked_card) => set(() => { 
  
      useStoreGame.decreaseTime();
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

   onCardClickHandler: (clicked_card) => set(() => {

    // disable clicking on card if game not started or level not yet 1
    if (useStoreGame.state.gameState !== "running") return console.log("Game is not running");
    if (useStoreGame.state.level === 0) return console.log("No cards loaded yet - nothing to react to");

    // if not active, return nothing
    if (clicked_card.isActive === false) return console.log("Invalid move – clicked card is already inactive");

    if (clicked_card.isActive === true && clicked_card.isMatch === false) {
      return useStoreCards.deactivateCard(clicked_card);
    }

    if (clicked_card.isActive === true && clicked_card.isMatch === true) {

      useStoreGame.increaseScore();
      useStoreCards.activateCards();
      useStoreGame.increaseLevel();

    }

    return;

   }),


}))

export default useStoreCards;