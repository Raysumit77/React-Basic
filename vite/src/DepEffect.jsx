import { useEffect, useState } from "react";

export const DepEffect = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const skip = (page - 1) * limit;
      const response = await fetch(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
      );
      const { products } = await response.json();
      setProducts(products);
    };
    getData();
  }, [page, limit]);
  return (
    <div>
      <h2>Pagination</h2>
      <input
        placeholder="Enter page Number"
        onChange={(e) => setPage(Number(e.target.value))}
      />
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value="">Select Limit</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
      {products.length > 0 ? (
        products.map((product) => {
          return <li key={product?.id}>{product?.title}</li>;
        })
      ) : (
        <>No data found</>
      )}
    </div>
  );
};
