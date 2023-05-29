import classess from "./Post.module.css";

function Post(props) {
  return (
    <div className={classess.post}>
      <p className={classess.author}>{props.author}</p>
      <p className={classess.text}>{props.body}</p>
    </div>
  );
}

export default Post;
