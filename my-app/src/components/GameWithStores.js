import React from "react";
import useStoreSlices from "../store/rootSliceStore";
import ShowContentWithStores from "./ShowContentWithStores";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Timer from "./Timer";
import Counters from "./Counters";
import TimerBonus from "./TimerBonus";


const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleFlashcard,
    toggleSound,
    timeLeft,
    setTimeLeft,
    tick,
    timeChange,
    resetCounters,
    unAssignCards,
    setGameStateToMenu,
    setFlashcard,
    resetTimeChange,
    setGameStateToEnded,
    timeLeftBonus,
    resetTimeLeftBonus,
    nullTimeLeftBonus
  } = useStoreSlices();


  console.log("gameState1 from GameWithStores:", gameState);

  console.log("gameState1.5 from GameWithStores:", gameState);

  console.log("timeLeft from GameWithStores:", timeLeft);

  console.log("level from GameWithStores:", level);


  const content = useMemo(() => {
    setFlashcard(levelSettings[level].showFlashcard);
  
    return <ShowContentWithStores  />

  }, [level]);


  const contentTimer = useMemo(() => {
    if (gameState === 'running')
    return <Timer 
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            gameState={gameState} 
            timeChange={timeChange} 
            resetTimeChange={resetTimeChange}
            setGameStateToEnded={setGameStateToEnded}
            timeLeftBonus={timeLeftBonus}
            resetTimeLeftBonus={resetTimeLeftBonus}
            level={level}
           />

  }, [gameState, timeChange, setTimeLeft ]);


  const contentTimerBonus = useMemo(() => {
    if (gameState === 'running')
    return <TimerBonus 
            gameState={gameState}            
            timeLeftBonus={timeLeftBonus}
            resetTimeLeftBonus={resetTimeLeftBonus}
            nullTimeLeftBonus={nullTimeLeftBonus}
            level={level}
           />

  }, [gameState, level ]);



  const contentCounters = useMemo(() => {
    if (gameState === 'running')
    return <Counters />

  }, [gameState]);
  
/*
  const loadContent = useCallback(
    (state) => {
      return <ShowContentWithStores state={state}/>
    },
    [gameState]
  ) */

  return (
    <>
      <div className="stickybuttons-all">
        <button
          onClick={() => {
            navigate("/");
            resetCounters();
            setGameStateToMenu();
            unAssignCards();
          }}
        >
          Exit
        </button>
        <button onClick={toggleSound}>Mute/Unmute</button>
      </div>

      <div className="Timer">
        {contentTimer}
      </div>

      <div className="TimerBonus">
        {contentTimerBonus}
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
