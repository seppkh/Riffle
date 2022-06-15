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

const PlayGameOver = () => {
  const [playGameOver] = useSound(gameOver, { soundEnabled: GetSoundState() });
  return playGameOver;
}

const PlayFlashcard = () => {
  const [playFlashcard] = useSound(flashCard, { soundEnabled: GetSoundState() });
  return playFlashcard;
}

export { PlayGameOver, PlayFlashcard };