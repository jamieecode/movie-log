import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useRef } from "react";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.3rem;
    font-weight: 600;
    width: 100%;
    margin: 1.3em 0 0.5em;
    text-align: center;
  }
`;

const FormContainer = styled.section`
  margin: 0 auto;
  width: 20rem;
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }
  p {
    margin: 1em;
    font-weight: 500;
  }
  label {
    margin: 1em;
    font-weight: 500;
  }
  input {
    padding: 1em;
    background-color: #f4f4f4;
    border-radius: 2em;
    border: 1px solid #f4f4f4;
    width: 100%;
    outline: none;
  }
  input:last-of-type {
    margin-bottom: 2em;
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
  width: 100%;
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

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Container>
      <h2>Log In</h2>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" ref={usernameRef} />
          <label>Password</label>
          <input type="password" ref={passwordRef} />
          <StyledButton type="submit" disabled={isFetching}>
            login
          </StyledButton>
        </form>
        <p>New to Our Website?</p>
        <Link to="/register">
          <StyledButton>create account</StyledButton>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
