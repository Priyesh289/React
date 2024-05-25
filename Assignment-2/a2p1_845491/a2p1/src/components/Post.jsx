
function Post(props) {
  const {pos} = props
  const {title,body} = pos
  return (
    <div>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
