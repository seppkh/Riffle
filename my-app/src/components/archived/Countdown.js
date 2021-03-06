import React, { useState, useRef, useEffect } from "react";

const Timer = ({ changeTimeCounter, timeChange }) => {
  let [timer, setTimer] = useState(30);  
  let id = useRef(null);
  let clear = () =>{
  window.clearInterval(id.current)
}

useEffect(() => {
  console.log("timeChange in Timer:", timeChange)
  console.log("changeTimeCounter in Timer:", changeTimeCounter)

  if (changeTimeCounter === -1) {
    changeTimeCounter = 0;
    return setTimer(30)}
  ;

  setTimer((state) => state + timeChange);

}, [changeTimeCounter])

  useEffect(()=>{
     id.current=window.setInterval(()=>{
      setTimer((time)=>time-1)
    },1000)

    return ()=>clear();
  },[])

  useEffect(()=>{
    if(timer <= 0){
      clear();
    }
  }, [timer])

  return (
    <div className="timer">
      <div>Time left : {timer} </div>
    </div>
  );
}

export default Timer;