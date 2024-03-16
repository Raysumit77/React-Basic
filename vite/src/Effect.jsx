import { useEffect, useState } from "react";

export const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState({});
  //no dependency
  //timer
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter((counter) => counter + 1);
  //   }, 1000);
  // });
  // //with empty dependency
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products/1");
      const result = await response.json();
      setProduct(result);
    };
    getData();
  }, []);
  // //with  dependency
  // useEffect(() => {}, [count]);

  return (
    <>
      {counter}
      <hr />
      My product detail
      <br />
      {product?.title}
      {product?.description}
    </>
  );
};
