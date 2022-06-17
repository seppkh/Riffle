import { iconsLength } from "../components/Icons";
import shuffle from "./shuffleSubCardOrder";

// create list of available numbers:
let numbersArr = Array.from(Array(iconsLength).keys());

// create as set of 4 cards for the gameplay:
let elementSets = {
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
  }
};

// creates a new array of n random numbers from a given list of numbers
function getRandom(arr, n) {
  let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// creates a new array with y matching numbers with mainCard and n random numbers are not in mainCard
function includeSomeThenGetRandom(numbersArr, n, mainArr, y) {
  if (y > n)
      throw new RangeError("includeSomeThenGetRandom: more elements being matched than in main array");
  let result = new Array(n);
  let matchingElements = mainArr.slice(0,y);
  let noMatchingElements = new Array(n - y);

  let numbersArrWithoutMainArr = numbersArr.filter(x => !mainArr.includes(x));

  noMatchingElements = getRandom(numbersArrWithoutMainArr, n-y);

  // add matching elements and not matching elements together into one array
  result = matchingElements.concat(noMatchingElements);

  return result;
};

// function to get a random number to decrease matching elements on incorrect cards
function getRandomInt(min, max) {

  // returns number between 1 and maxMatching
  return min + Math.floor(Math.random() * (max - min + 1));
}

// create and save values for each card :
function createSets(mainCardElementCount, subCardElementCount, maxMatching) {
  let mainCard = {
    elements: getRandom(numbersArr, mainCardElementCount)
  };
  let card1 = {
    elements: includeSomeThenGetRandom(numbersArr, subCardElementCount, mainCard.elements, maxMatching),
    isMatch: true,
    isActive: true
  };
  let card2 = {
    elements: includeSomeThenGetRandom(numbersArr, subCardElementCount, mainCard.elements, maxMatching - getRandomInt(1, maxMatching)),
    isMatch: false,
    isActive: true
  };
  let card3 = {
    elements: includeSomeThenGetRandom(numbersArr, subCardElementCount, mainCard.elements, maxMatching - getRandomInt(1, maxMatching)),
    isMatch: false,
    isActive: true
  };

  let subCards = [];
  subCards.push(card1, card2, card3);
  let subCardsShuffle = shuffle(subCards);

  elementSets = {
    mainCard: mainCard,
    card1: subCardsShuffle[0],
    card2: subCardsShuffle[1],
    card3: subCardsShuffle[2],
  };
  
  return elementSets;
};

export default createSets ;