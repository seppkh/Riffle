import React, { useEffect } from "react";
import useStoreSlices from "../store/rootSliceStore";
import ShowContentWithStores from "./ShowContentWithStores";
import { useNavigate } from "react-router-dom";

import useSound from 'use-sound';
import lastSecondsBeep from '../assets/sounds/lastSecondsBeep.mp3';
import gameBackground from '../assets/sounds/gameBackground.mp3';
import PlaySounds from './PlaySounds';

const GameWithStores = () => {
  const navigate = useNavigate();

  const toggleSound = useStoreSlices((state) => state.toggleSound);
  const exit = useStoreSlices((state) => state.exit);
  const gameState = useStoreSlices((state) => state.gameState);

  const level = useStoreSlices((state) => state.level);
  const levelSettings = useStoreSlices((state) => state.levelSettings);
  const toggleFlashcard = useStoreSlices((state) => state.toggleFlashcard);

  const tick = useStoreSlices((state) => state.tick);
  const MINUTE_MS = 1000;
  const tickBonus = useStoreSlices((state) => state.tickBonus);
  const MINUTE_MS_BONUS = 25;

  const timeLeft = useStoreSlices((state) => state.timeLeft);

  const soundState = useStoreSlices((state) => state.soundState);
  const [playTimerEnding] = useSound(lastSecondsBeep, {
    soundEnabled: soundState,
  });
  
  const setGameStateToNotStarted = useStoreSlices((state) => state.setGameStateToNotStarted);


  useEffect(() => {    
    if (gameState === 'menu')
      setGameStateToNotStarted();
      
  }, []);


  useEffect(() => {
    if (gameState !== "running") return;

    const timeInterval = setInterval(() => {
      tick();
    }, MINUTE_MS);
    const bonusTimeInterval = setInterval(() => {
      tickBonus();
    }, MINUTE_MS_BONUS);

    if (timeLeft <= 5) playTimerEnding();

    return () => {
      clearInterval(timeInterval);
      clearInterval(bonusTimeInterval);
    };
  }, [gameState, timeLeft]);


  useEffect(() => {
    if (levelSettings[level].showFlashcard === true) {
      toggleFlashcard();
    }
  }, [level]);

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
        <PlaySounds />
      </div>
    </>
  );
};

export default GameWithStores;
