import useStoreSlices from '../store/rootSliceStore';

const CountersPrimary = () => {
  const { score, lives } = useStoreSlices();

  return (
    <>
      <p>score: {score}</p>
      <p>lives: {lives}</p>
    </>
  );
};

export default CountersPrimary;
