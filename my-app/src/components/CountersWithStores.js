import useStoreGame from "../store/gameStateStore";

const CountersWithStores = () => {

  const level = useStoreGame(state => state.level);
  const score = useStoreGame(state => state.score);
  const timeLeft = useStoreGame(state => state.timeLeft);


  return (
    <div>
      <p>level: {level}</p> <br></br>
      <p>score: {score}</p> <br></br>
      <p>timeLeft: {timeLeft}</p> <br></br>
    </div>
  )
}

export default CountersWithStores;