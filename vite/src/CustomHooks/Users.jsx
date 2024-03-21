import useFetch from "./useFetch";

export const Blogs = () => {
  const { data } = useFetch("https://dummyjson.com/users");
  return <div>{JSON.stringify(data.users)}</div>;
};
