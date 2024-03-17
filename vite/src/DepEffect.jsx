import { useEffect, useState } from "react";

export const DepEffect = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const skip = (page - 1) * limit;
      const response = await fetch(
        `htttps://dummyjson.com/products?skip=${skip}&limit=${limit}`
      );
      const { product } = await response.json();
      setProducts(product);
    };
    getData();
  }, [page, limit]);
  return;
  <div>
    <h2>Pgination</h2>
    <input
      placeholder="Enter page number"
      onChange={(e) => setPage(Number(e.target.value))}
    />
    <select onChange={(e) => setLimit(Number(e.target.value))}>
      <option value="">select Limit</option>
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="100">100</option>
    </select>
    {products.length > 0 ? (
      products.map((product) => {
        return <li key={product?.id}>{product?.title}</li>;
      })
    ) : (
      <>No data Found</>
    )}
  </div>
};



