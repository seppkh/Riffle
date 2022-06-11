import React from "react";
import useStoreSlices from "../store/rootSliceStore";
import ShowContentWithStores from "./ShowContentWithStores";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import CountersWithStores from "./CountersWithStores";


const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleSound,
    setFlashcard,
    timeLeftBonus,
    timeLeft
  } = useStoreSlices();

  console.log("gameState from GameWithStores:", gameState);
  
  const content = useMemo(() => {

    setFlashcard(levelSettings[level].showFlashcard);

    return <ShowContentWithStores />

  }, [level]);


  const contentCounters = useMemo(() => {
    // console.log("gameState1.5 from GameWithStores:", gameState);

    if (gameState === 'running')
    return <CountersWithStores />

  }, [gameState, timeLeft, timeLeftBonus]);


  return (
    <>
      <div className="stickybuttons-all">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Exit
        </button>
        <button onClick={toggleSound}>Mute/Unmute</button>
      </div>

      <div className="Counters">
        {contentCounters}
      </div>

      <div className="Game">
        {content}
      </div>
    </>
  );
};

export default GameWithStores;
