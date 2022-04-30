import useStoreSlices from "../store/rootSliceStore";

const CountersWithStores = () => {

  const level = useStoreSlices(state => state.level);
  const score = useStoreSlices(state => state.score);
  const timeLeft = useStoreSlices(state => state.timeLeft);


  return (
  <>
    <div className="counters">
      <p>level: {level}</p>
      <p>score: {score}</p>
      <p>time: {timeLeft}</p>
    </div>
  </>
  )
}

export default CountersWithStores;