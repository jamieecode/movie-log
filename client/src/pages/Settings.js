import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
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
    margin: 1.3em 0 0.5em;
    text-align: center;
  }
`;

const FormContainer = styled.form`
  margin: 0 auto;
  width: 20rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  p {
    margin: 1em;
    font-weight: 500;
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

const StyledSettings = styled.section`
  margin: 0 auto 3em;
`;

const Settings = () => {
  const { user, dispatch } = useContext(LoginContext);
  const history = useHistory();
  const [updatingUser, setUpdatingUser] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage: "Username should be 6-12 characters",
      label: "username",
      pattern: "^[A-Za-z0-9]{6,12}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage: "Password should be 8-18 characters.",
      label: "Password",
      pattern: "^[A-Za-z0-9]{8,18}$",
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: updatingUser.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setUpdatingUser({ ...updatingUser, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { userId: user._id, username: user.username, user },
      });
      localStorage.removeItem("user");
      alert("Your Account has been deleted...");
      window.location.replace("/");
    } catch (err) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username: updatingUser.username,
      password: updatingUser.password,
    };

    if (
      !updatingUser.username.errorMessage &&
      !updatingUser.password.errorMessage &&
      updatingUser.password === updatingUser.confirmPassword
    ) {
      try {
        const res = await axios.put("/users/" + user._id, updatedUser);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        alert("Your account has been updated");
        history.push("/");
      } catch (err) {
        console.log(err);
        dispatch({ type: "UPDATE_FAILURE" });

        alert("Please try again.");
      }
    }
  };

  return (
    <StyledSettings>
      <Container>
        <h2>Update Account</h2>
        <FormContainer onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={updatingUser[input.name]}
              onChange={onChange}
            />
          ))}
          <StyledButton>update</StyledButton>
        </FormContainer>
      </Container>
      <Container>
        <div>
          <h2>Delete Account</h2>
          <StyledButton onClick={handleDelete}>YES</StyledButton>
        </div>
      </Container>
    </StyledSettings>
  );
};

export default Settings;
