import useSound from "use-sound";
import gameBackground from '../assets/sounds/gameBackground.mp3';
import gameOver from '../assets/sounds/gameOver.mp3';
import flashCard from '../assets/sounds/flashCard.mp3';
import useStoreSlices from "../store/rootSliceStore";

const GetSoundState = () => {
  const {
    soundState,
  } = useStoreSlices(); 
  return soundState;
}

const Sounds = () => {
  const {
    soundState,
  } = useStoreSlices(); 

  const [playGameOver] = useSound(gameOver, { soundEnabled: soundState });
  const [playFlashcard] = useSound(flashCard, { 
    soundEnabled: soundState,
  });
  const [playBackground, { stop, isPlaying }] = useSound(gameBackground, {
    interrupt: true,
    soundEnabled: soundState,
  }); 

}

export { Sounds, };