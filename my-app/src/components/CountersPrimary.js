import useStoreSlices from '../store/rootSliceStore';
import './CountersPrimary.css';

const CountersPrimary = () => {
  const { score, lives } = useStoreSlices();

  return (
    <div className='counters-primary'>
      <p>score: {score}</p>
      <p>lives: {lives}</p>
    </div>
  );
};

export default CountersPrimary;
