import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const StyledArticle = styled.article`
  width: 50%;
  margin: 4em auto;
  p {
    margin: 1em 0;
    font-size: 1.1rem;
    &:first-of-type {
      font-weight: 500;
      font-size: 1rem;
      text-align: right;
    }
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;

const StyledEdit = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 3em auto;
  input {
    font-size: 1.5rem;
    font-weight: 600;
  }
  textarea {
    font-size: 1rem;
    height: 10rem;
    padding: 1.5em;
    margin: 2em 0;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: end;
  button {
    font-size: 1.1rem;
    width: 5.5rem;
    padding: 0.2em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5em;
    &:first-of-type {
      background-color: #2b6a4d;
    }
    &:last-of-type {
      background-color: #bf2c22;
      margin-left: 1em;
    }
  }
`;

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(LoginContext);
  const imageURL = "http://localhost:3001/images/";
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
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
    <>
      {edit ? (
        <StyledEdit>
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
          <StyledButtons>
            <button onClick={handleEdit}>
              Finish
              <AiOutlineCheck />
            </button>
            <button onClick={() => setEdit(false)}>
              cancel
              <AiOutlineClose />
            </button>
          </StyledButtons>
        </StyledEdit>
      ) : (
        <StyledArticle>
          {post.image && <img src={imageURL + post.image} />}
          <h2>{title}</h2>
          <p>written by {post.username}</p>
          <p>{content}</p>
          {post.username === user?.username && (
            <StyledButtons>
              <button onClick={() => setEdit(true)}>
                edit
                <AiOutlineEdit />
              </button>
              <button onClick={handleDelete}>
                delete
                <AiOutlineDelete />
              </button>
            </StyledButtons>
          )}
        </StyledArticle>
      )}
    </>
  );
};

export default SinglePost;
