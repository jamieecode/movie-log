import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import FormInput from "../components/FormInput";

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

const FormContainer = styled.form`
  margin: 0 auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
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
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage: "write your name",
      label: "name",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      errorMessage: "Username should be 6-12 characters",
      label: "username",
      pattern: "^[A-Za-z0-9]{6,12}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      errorMessage: "Password should be 8-18 characters.",
      label: "Password",
      pattern: "^[A-Za-z0-9]{8,18}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: user.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h2>Register</h2>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={user[input.name]}
            onChange={onChange}
          />
        ))}
        <StyledButton
          onClick={() => {
            if (
              !user.name.errorMessage &&
              !user.username.errorMessage &&
              !user.password.errorMessage &&
              user.password === user.confirmPassword
            ) {
              axios
                .post("http://localhost:3001/register", user)
                .then((response) => {
                  alert("USER CREATED");
                });
            }
          }}
        >
          Register
        </StyledButton>
        <p>Already a member?</p>
        <Link to="/login">
          <StyledButton>Login</StyledButton>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Register;
