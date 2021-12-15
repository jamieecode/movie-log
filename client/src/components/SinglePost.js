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

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });

      window.location.replace("/post");
    } catch (err) {}
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <h5>{post.username}</h5>
      <p>{post.content}</p>
      <small>{post.createdAt}</small>
      {post.username === user.username && (
        <>
          <button>
            edit
            <AiOutlineEdit />
          </button>
          <button onClick={handleDelete}>
            delete
            <AiOutlineDelete />
          </button>
        </>
      )}
    </div>
  );
};

export default SinglePost;
