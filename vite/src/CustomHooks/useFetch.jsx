import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({}); //list of items

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      const resp = await fetch(url, { signal });
      const result = await resp.json();
      setData(result);
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data };
};

export default useFetch;
