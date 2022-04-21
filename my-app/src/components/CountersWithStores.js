import useStoreGame from "../store/gameStateStore";

const CountersWithStores = () => {

  const level = useStoreGame(state => state.level);
  const score = useStoreGame(state => state.score);
  const timeLeft = useStoreGame(state => state.timeLeft);


  return (
  <>
    <div>
      <p>level: {level}</p>
      <p>score: {score}</p>
      <p>timeLeft: {timeLeft}</p>
    </div>
  </>
  )
}

export default CountersWithStores;