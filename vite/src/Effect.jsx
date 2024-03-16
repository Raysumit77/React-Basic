import { useEffect, useState } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);
  //no dependency
  //time event ( how far new year??)
  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  });
  //with empty dependency

  return <div>counter</div>;
};

export default Effect;
