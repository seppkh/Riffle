import useStoreSlices from '../store/rootSliceStore';
import levelSettings from '../store/levelSettings';
import number1 from '../assets/numbers/1.svg';
import number2 from '../assets/numbers/2.svg';
import number3 from '../assets/numbers/3.svg';
import number4 from '../assets/numbers/4.svg';

const CountersSecondary = () => {
  const {
    level
  } = useStoreSlices();

  const matchingElementCount = levelSettings[level].matchingElementCount;
  let imgSource = '';
  let text = 'matching items';

  switch(matchingElementCount) {
    case 1:
      imgSource = number1;
      text = 'matching item'
      break;
    case 2:
      imgSource = number2;
      break;
    case 3:
      imgSource = number3;
      break;
    case 4:
      imgSource = number4;
      break;
    default:
      break;
  } 

  return (
    <>
      <img src={imgSource} alt='matchingElementsImg' />
      <p className='elements'><span>{text}</span></p>

    </>
  );
};

export default CountersSecondary;
