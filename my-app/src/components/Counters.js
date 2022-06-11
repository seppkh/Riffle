import useStoreSlices from '../store/rootSliceStore';
import './Counters.css';
import levelSettings from '../store/levelSettings';

const Counters = () => {

  const {
    gameState,
    score,
    level
  } = useStoreSlices();

  
  const matchingElementCount = levelSettings[level].matchingElementCount;

  console.log("gameState from CountersWithStores:", gameState);


  return (
    <>
    <div>
      <p>level: {level}</p>
      <p>score: {score}</p>
      <p>matching elements: {matchingElementCount}</p>
    </div>
    </>
  );
};

export default Counters;
