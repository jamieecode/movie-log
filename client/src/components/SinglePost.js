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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
    };
    getPost();
  }, [path]);

  const handleEdit = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        content,
      });
      setEdit(false);
      console.log(post);
    } catch (err) {}
  };

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
      {edit ? (
        <>
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <h5>{post.username}</h5>
          <p>{content}</p>
          <small>{post.updatedAt}</small>
        </>
      )}

      {post.username === user?.username && (
        <>
          {!edit ? (
            <button onClick={() => setEdit(true)}>
              edit
              <AiOutlineEdit />
            </button>
          ) : (
            <button onClick={handleEdit}>Finish</button>
          )}

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
