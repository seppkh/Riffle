import useStoreSlices from '../store/rootSliceStore';
import './Counters.css';

const CountersPrimary = () => {

  const {
    score,
    lives
  } = useStoreSlices();

  return (
    <div className='counters-all primary'>  
      <p>score: {score}</p>
      <p>lives: {lives}</p>

    </div>
  );
};

export default CountersPrimary;
