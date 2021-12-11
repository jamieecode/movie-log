import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.3rem;
    font-weight: 600;
    width: 100%;
    margin: 1.5em 0 0.5em;
    text-align: center;
  }
`;

const FormContainer = styled.section`
  margin: 0 auto;
  width: 30%;
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
  }
  p {
    margin: 1em;
    font-weight: 500;
  }
  label {
    margin: 0.5em 1em;
    font-weight: 500;
  }
  input {
    padding: 1em;
    background-color: #f4f4f4;
    border-radius: 2em;
    border: 1px solid #f4f4f4;
    width: 20rem;
    outline: none;
  }
  input:hover {
    background-color: #eeeeee;
  }
  input:focus {
    border: 1px solid #ccc;
  }
`;

const StyledButton = styled.button`
  background-color: #032541;
  color: white;
  width: 20rem;
  padding: 1em;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 2em;
  &:hover {
    background-color: #01b4e4;
    transition: 0.5s;
  }
`;
const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidPassword2, setInvalidPassword2] = useState(false);

  const createUser = () => {
    if (
      password === password2 &&
      !invalidUsername &&
      !invalidPassword &&
      !invalidPassword2
    ) {
      axios
        .post("http://localhost:3001/register", {
          name,
          username,
          password,
        })
        .then((response) => {
          alert("USER CREATED");
        });
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      <FormContainer>
        <form>
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value.length < 6 || e.target.value.length > 12)
                setInvalidUsername(true);
              else {
                setInvalidUsername(false);
                setUsername(e.target.value);
              }
            }}
          />
          {invalidUsername ? <p>Username should be 6-12 characters.</p> : ""}
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              if (e.target.value.length < 6 || e.target.value.length > 12)
                setInvalidPassword(true);
              else {
                setInvalidPassword(false);
                setPassword(e.target.value);
              }
            }}
          />
          {invalidPassword ? <p>Password should be 6-12 characters.</p> : ""}
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => {
              if (e.target.value !== password) {
                setInvalidPassword2(true);
              } else {
                setInvalidPassword2(false);
                setPassword2(e.target.value);
              }
            }}
          />
          {invalidPassword2 ? <p>Check your password again.</p> : ""}
        </form>
        <StyledButton onClick={createUser}>Register</StyledButton>
        <p>Already a member?</p>
        <Link to="/login">
          <StyledButton>Login</StyledButton>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Register;
