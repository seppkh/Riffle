const Counters = (props) => {

const { score, currentLevel, mainCardElementCount, cardElementCount, matchingElementCount, deactivatedCardCount, guessStatus, gameOver} = props;

  console.log("v2 score:", score);
  console.log("v2 currentLevel:", currentLevel);
  console.log("v2 mainCardElementCount:", mainCardElementCount);
  console.log("v2 cardElementCount:", cardElementCount);
  console.log("v2 matchingElementCount:", matchingElementCount);
  console.log("v2 deactivatedCardCount:", deactivatedCardCount);

  return (
    <div>
      <p> Score: {score}</p>
      <p> Level: {currentLevel}</p>
      <p> mainCard elements: {mainCardElementCount}</p>
      <p> subCard elements: {cardElementCount}</p>
      <p> matching elements: {matchingElementCount}</p>
      <p> deactivatedCardCount: {deactivatedCardCount}</p>

      <p> guessStatus: {guessStatus.toString()}</p>
      <p> gameOver: {gameOver.toString()}</p>
    </div>
  )
}

export default Counters;