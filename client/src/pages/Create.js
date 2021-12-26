import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";

const StyledCreateSection = styled.section`
  display: flex;
  flex-direction: column;

  img {
    width: 30rem;
    height: 20rem;
    object-fit: cover;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    margin: 1.5em 0 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    width: 30rem;
    margin: 0.5em;
    font-size: 1.2rem;
    font-weight: 500;
  }

  input {
    border: 2px solid #032541;
    width: 30rem;
    height: 2.5rem;
    padding-left: 1em;
    &: last-of-type {
      border: none;
    }
  }

  textarea {
    border: 2px solid #032541;
    width: 30rem;
    height: 20rem;
    padding: 1em;
  }
`;

const StyledButton = styled.button`
  background-color: #032541;
  color: white;
  width: 8rem;
  padding: 1em;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 1em;
  margin: 1em;
  &:hover {
    background-color: #01b4e4;
    transition: 0.5s;
  }
`;

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      content,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    const res = await axios.post("/create", newPost);

    window.location.replace("/post");
  };

  return (
    <StyledCreateSection>
      <h2>Create</h2>
      {file && <img src={URL.createObjectURL(file)} alt="blogpost" />}
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>content</label>
        <textarea
          type="text"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Image</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <StyledButton type="submit">submit</StyledButton>
      </form>
    </StyledCreateSection>
  );
};

export default Create;
