// create list of available numbers:
var numbersArr = Array.from(Array(50).keys());

// create as set of 4 cards for the gameplay:
var elementSets = {
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
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// creates a new array with y matching numbers with mainCard and n random numbers are not in mainCard
function includeSomeThenGetRandom(numbersArr, n, mainArr, y) {
  if (y > n)
      throw new RangeError("includeSomeThenGetRandom: more elements being matched than in main array");
  var result = new Array(n);
  var matchingElements = mainArr.slice(0,y);
  var noMatchingElements = new Array(n - y);

  var numbersArrWithoutMainArr = numbersArr.filter(x => !mainArr.includes(x));

  noMatchingElements = getRandom(numbersArrWithoutMainArr, n-y);

  // add matching elements and not matching elements together into one array
  result = matchingElements.concat(noMatchingElements);

  return result;
};

// function to get a random number to decrease matching elements on incorrect cards
function getRandomInt(max) {
  var min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// create and save values for each card :
function createSets(mainCardElementCount, subCardElementCount, maxMatching) {
  var mainCard = getRandom(numbersArr, mainCardElementCount);
  var card1 = includeSomeThenGetRandom(numbersArr, subCardElementCount, mainCard, maxMatching);
  var card2 = includeSomeThenGetRandom(numbersArr, subCardElementCount, mainCard, maxMatching - getRandomInt(maxMatching));
  var card3 = includeSomeThenGetRandom(numbersArr, subCardElementCount, mainCard, maxMatching - getRandomInt(maxMatching));

  elementSets = {
    mainCard: {
      elements: mainCard
    },
    card1: {
      elements: card1,
      isMatch: true,
      isActive: true
    },
    card2: {
      elements: card2,
      isMatch: false,
      isActive: true
    },
    card3: {
      elements: card3,
      isMatch: false,
      isActive: true
    },
  };
  
  return elementSets;
};

export default createSets ;