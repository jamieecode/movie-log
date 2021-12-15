import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(LoginContext);
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
      <button>
        edit
        <AiOutlineEdit />
      </button>
      <button>
        delete
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default SinglePost;
