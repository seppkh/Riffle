import useStoreSlices from '../store/rootSliceStore';
import './Counters.css';

const CountersWithStores = () => {
  const level = useStoreSlices((state) => state.level);
  const score = useStoreSlices((state) => state.score);
  const timeLeft = useStoreSlices((state) => state.timeLeft);
  const timeLeftBonus = useStoreSlices((state) => state.timeLeftBonus);

  return (
    <div className='counters-all'>
      <p>level: {level}</p>
      <p>time: {timeLeft}</p>
      <p>3X bonus: {timeLeftBonus}</p>
      <p>score: {score}</p>
    </div>
  );
};

export default CountersWithStores;
