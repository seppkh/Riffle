import useSound from 'use-sound';

import guessRight from '../assets/sounds/guessRight.mp3';
import guessWrong from '../assets/sounds/guessWrong.mp3';

// create rootSliceStore, kus kogud kokku kõik related funktsioonid
// startGame running nupule vajutades, elemendid kuva
// timer jooksma

  
const usePlaySounds = () => {

  const [right] = useSound(guessRight);

};

export default usePlaySounds;