import React from "react";
import styled from "styled-components";

const StyledCreateSection = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    margin: 1.5em 0 1em;
  }

  article {
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
  return (
    <StyledCreateSection>
      <h2>Create</h2>
      <article>
        <label>title</label>
        <input type="text" />
        <label>content</label>
        <textarea></textarea>
        <StyledButton>submit</StyledButton>
      </article>
    </StyledCreateSection>
  );
};

export default Create;
