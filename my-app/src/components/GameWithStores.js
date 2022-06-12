import React from "react";
import useStoreSlices from "../store/rootSliceStore";
import ShowContentWithStores from "./ShowContentWithStores";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import CountersSecondary from "./CountersSecondary";
import CountersPrimary from "./CountersPrimary";


const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleSound,
    setFlashcard,
    timeLeftBonus,
    timeLeft,
    resetCounters
  } = useStoreSlices();

  console.log("gameState from GameWithStores:", gameState);

  const content = useMemo(() => {

    setFlashcard(levelSettings[level].showFlashcard);

    return <ShowContentWithStores />

  }, [level]);


  const contentCountersPrimary = useMemo(() => {

    if (gameState === 'running' || 
      gameState === 'flashcard' || 
      gameState === 'notStarted')
    return <CountersPrimary />

  }, [gameState]);


  const contentCountersSecondary = useMemo(() => {

    if (gameState === 'running')
    return <CountersSecondary />

  }, [gameState, timeLeft, timeLeftBonus]);


  return (
    <>
      <div className="stickybuttons-all">
        <button
          onClick={() => {
            navigate("/");
            resetCounters();
          }}
        >
          Exit
        </button>
        <button onClick={toggleSound}>Mute/Unmute</button>
      </div>

      <div className="CountersPrimary">
        {contentCountersPrimary}
      </div>

      <div className="CountersSecondary">
        {contentCountersSecondary}
      </div>

      <div className="Game">
        {content}
      </div>
    </>
  );
};

export default GameWithStores;
