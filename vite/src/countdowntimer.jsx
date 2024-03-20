import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return <div>{count > 0 ? <h1>{count}</h1> : <h1>Happy New Year!</h1>}</div>;
};

export default CountdownTimer;
