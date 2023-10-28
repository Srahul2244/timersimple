import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`callback invoked, time is ${Date.now()}`);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    const cleanup = () => {
      clearInterval(intervalId);
    };

    return cleanup;
  }, []);
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <h3>Countdown Timer : {count}</h3>
    </div>
  );
}

export default Timer;
