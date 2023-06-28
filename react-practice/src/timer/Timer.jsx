import { useState, useRef } from "react";

function Timer(props) {
  const [state, setState] = useState(0);
  let timerid = useRef(0); 

  const startTimer = () => {
    timerid.current = setInterval(() => {
      setState((prevState) => prevState + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerid.current);
  };

  const resetTimer = ()=>{
    setState(0)
    clearInterval(timerid.current)
  }

  return (
    <div
      style={{
        margin: "50px auto",
        boxShadow: "0 0 10px black",
        padding: "50px",
        width: "500px",
        textAlign: "center",
      }}
    >
      <h2>Timer : {state}</h2>
      <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>&nbsp;&nbsp;&nbsp;
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;