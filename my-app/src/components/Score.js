import { useRef } from 'react';

const UpdateScore = () => {
  let score = useRef(6);

  console.log("Score: ", score.current);
  console.log(typeof(score.current));
  
  function increaseScore() {
    score.current += 1;
    return;
  }

  function decreaseScore() {
    console.log("Score: ", score.current);
    score.current -= 1;
    console.log("Score new: ", score.current);
    return;
  }

  return  (
    <div className="score.current">
      <p> Score: {score.current}</p>
    </div>
  ) 
}

export default UpdateScore;


