const PostListItem = ({ post }) => {
  return (
    <>
      <h3>{post.title}</h3>
      <div>{post.content}</div>
      <small>{post.author}</small>
    </>
  );
};

export default PostListItem;
