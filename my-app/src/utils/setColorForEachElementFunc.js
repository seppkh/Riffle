
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const setColorForEachElement = (iconsLength, colorSet) => {

  const result = {};

  for (let i = 0; i <= iconsLength; i++) {
    const colorIndex = getRandomInt(colorSet.length);

    result[i] = colorSet[colorIndex];
  }

  return result ;
};

export default setColorForEachElement;