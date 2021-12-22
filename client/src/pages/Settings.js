import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const StyledSettings = styled.section`
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
  width: 60%;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Settings = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { user, dispatch } = useContext(LoginContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      password,
    };
    if (password === password2) {
      try {
        const res = await axios.put("/users/" + user._id, updatedUser);
        setEditUser(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        alert("Your account has been updated");
        history.push("/");
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
        alert("Please try again.");
      }
    }
  };

  return (
    <StyledSettings>
      <div>
        <p>Do you want to delete your account?</p>
        <div>
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Change Username</label>
        <input
          type="text"
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Change Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" onChange={(e) => setPassword2(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </StyledSettings>
  );
};

export default Settings;
