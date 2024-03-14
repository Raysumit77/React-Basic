export const List = ({ blogs }) => {
  return <>{blogs.length > 0 ? <BlogList blogs={blogs} /> : <EmptyList />}</>;
};

const BlogList = ({ blogs }) => {
  return (
    <>
      <ul>
        {blogs.map((blog) => {
          return <li>{blog?.title}</li>;
        })}
      </ul>
    </>
  );
};

const EmptyList = () => {
  return <>Empty Table</>;
};
