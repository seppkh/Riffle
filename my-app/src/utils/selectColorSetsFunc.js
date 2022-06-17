import { iconColorMediumShades, allSets } from "../components/IconColors";

// creates a new array of n random colorSets from a given list of colorSets
function getRandom(arr, n) {
  let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more colorSets taken than available");
  while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}


function selectRandomColorSets(colorSetAmount) {
  let selectedColors = [];

  // console.log("allSets:", allSets)

  const selectedRandomColorSets = getRandom(allSets, colorSetAmount);
  // console.log("selectedRandomColorSets:", selectedRandomColorSets)

  selectedRandomColorSets.forEach(element => selectedColors.push(...element));
  // console.log("selectedColors:", selectedColors)

  return selectedColors;
}


function selectColorSetsFunc(level) {
  let result = [];
  let colorSetCount = 0;

  if (level >= 0 && level <= 10) {
    result.push(...iconColorMediumShades);
  };

  if (level >= 11) {
    if (level >= 11 && level <= 20)
      colorSetCount = 4;
    if (level >= 21 && level <= 30)
      colorSetCount = 3;
    if (level >= 31 && level <= 40)
      colorSetCount = 2;
    if (level >= 41)
      colorSetCount = 1;
  
    result.push(...selectRandomColorSets(colorSetCount));
  };

  // console.log("selectedColors", result);
  // console.log("selectedColors.length", result.length);

  return result;
}

export default selectColorSetsFunc;