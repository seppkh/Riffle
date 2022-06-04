import React from "react";
import useStoreSlices from "../store/rootSliceStore";
import ShowContentWithStores from "./ShowContentWithStores";
import { useNavigate } from "react-router-dom";


const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleFlashcard,
    toggleSound
  } = useStoreSlices();

  console.log("gameState1 from GameWithStores:", gameState);

  if (levelSettings[level].showFlashcard === true & gameState !== "running") {
    toggleFlashcard();
  }

  console.log("gameState1.5 from GameWithStores:", gameState);
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
          <ShowContentWithStores />
      </div>
    </>
  );
};

export default GameWithStores;
