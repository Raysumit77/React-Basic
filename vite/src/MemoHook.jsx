import { useMemo, useState } from "react";
import useFetch from "./CustomHooks/useFetch";

//how to use usememo hook?
export const MemoHook = () => {
  const [toggle, setToggle] = useState(false);
  const { data } = useFetch("https://dummyjson.com/products?limit=100");

  //complex calculation
  const highestRatedProduct = useMemo(() => {
    console.time("cCal");
    const product = data?.products?.sort((a, b) => a.rating - b.rating).pop();
    console.timeEnd("cCal");
    return product?.title + " (" + product?.rating + ")";
  }, [data]);

  //to solve reexcution of expensive fn calculation, we need to use memo hook
  //what is considered expensive calculation?
  //anything that takes more than 0.15s to calculate ,it is called expensive calc

  return (
    <>
      {highestRatedProduct}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </>
  );
};
