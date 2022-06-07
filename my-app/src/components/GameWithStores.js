import React from "react";
import useStoreSlices from "../store/rootSliceStore";
import ShowContentWithStores from "./ShowContentWithStores";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";


const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleFlashcard,
    toggleSound
  } = useStoreSlices();

  const showFlashcard = levelSettings[level].showFlashcard;

  console.log("gameState1 from GameWithStores:", gameState);

  console.log("gameState1.5 from GameWithStores:", gameState);


  const content = useMemo((level) => {

    if (level === 1) {
      if (showFlashcard && gameState !== "running") {
        toggleFlashcard();
      }
    }
  
    if (showFlashcard && gameState !== "flashcard") {
        toggleFlashcard();
    }
  
    return <ShowContentWithStores />

  }, [level]);

  
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
          }}
        >
          Exit
        </button>
        <button onClick={toggleSound}>Mute/Unmute</button>
      </div>

      <div className="Game">
        {content}
      </div>
    </>
  );
};

export default GameWithStores;
