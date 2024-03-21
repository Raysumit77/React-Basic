import { useState } from "react";
import useFetch from "./useFetch";
import useDebounce from "./useDebounce";

export const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useDebounce({
    wait: 1000,
    value: debouncedTerm,
    setFn: setSearchTerm,
  });

  const { data } = useFetch(
    `https://dummyjson.com/posts/search?q=${searchTerm}`
  );
  return (
    <div>
      <input
        placeholder="Enter Search Keyword"
        onChange={(e) => setDebouncedTerm(e.target.value)}
      />
      <ol>
        {data.posts?.length > 0 ? (
          data.posts.map((post) => {
            return <li key={post?.id}>{post?.title}</li>;
          })
        ) : (
          <>Searched blog not found</>
        )}
        ;
      </ol>
    </div>
  );
};
