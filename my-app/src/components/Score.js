import React, { useRef } from 'react';

const Score = () => {
  let score = useRef(5);

  console.log("Score: ", score.current);
  
  return score.current;

  /* 
  function increaseScore() {
    score.current += 1;
  }

  function decreaseScore(score) {
    console.log("Score: ", score);
    score -= 1;
    console.log("Score new: ", score);
  } 

  return (
    <div className="score">
      <p> Score: {score.current}</p>
    </div>
  ) */
}

export default Score;


