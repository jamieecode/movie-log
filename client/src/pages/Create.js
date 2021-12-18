import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";

const StyledCreateSection = styled.section`
  display: flex;
  flex-direction: column;
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
  }

  textarea {
    border: 2px solid #032541;
    width: 30rem;
    height: 20rem;
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
  const { user } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      content,
    };
    const res = await axios.post("/create", newPost);
    console.log(res.data);
    window.location.replace("/post");
  };

  return (
    <StyledCreateSection>
      <h2>Create</h2>
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
        <StyledButton type="submit">submit</StyledButton>
      </form>
    </StyledCreateSection>
  );
};

export default Create;
