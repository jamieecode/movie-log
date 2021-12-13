import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <div>
        <Link to={`/post/${post._id}`}>
          <h3>{post.title}</h3>
        </Link>

        <h5>by {post.username}</h5>
        <p>{post.content}</p>
        <p>{post.createdAt}</p>
      </div>
    </div>
  );
};

export default Post;
