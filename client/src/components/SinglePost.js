import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div>
      <h2>{post.title}</h2>
      <h5>{post.username}</h5>
      <p>{post.content}</p>
      <small>{post.createdAt}</small>
    </div>
  );
};

export default SinglePost;
