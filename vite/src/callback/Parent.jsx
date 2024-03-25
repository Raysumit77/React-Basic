import { useCallback, useState } from "react";
import Children from "./Children";

export const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [time, setTime] = useState(new Date().toLocaleString());

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1500);
  }, [salary]);
  return (
    <div>
      <h1>Parent</h1>
      Date: {time}
      <br />
      <button onClick={() => setTime(new Date().toLocaleString())}>
        Time Correction
      </button>
      <Children salary={salary} increaseSalary={increaseSalary} />
    </div>
  );
};

//when to use callback hook?
//1. if u are parent component fn to children component
//2. if u have a fn that is expensive and u need to call it in multiple place (API)
//3.if we are are working with a function that relies on external data or state
//4.if u are working with functional component

// con >> Memory consumption high >> complex code
