import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/loginContext";

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
  // const [listOfUsers, setListOfUsers] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3001/login").then((response) => {
  //     setListOfUsers(response.data);
  //   });
  // }, []);

  const { setLoginUser } = useContext(LoginContext);

  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/server/auth/login", user).then((res) => {
      alert(res.data.message);
      console.log(res.data.user);
      setLoginUser(res.data.user);
    });
  };

  return (
    <Container>
      <h2>Log In</h2>
      <FormContainer>
        <form>
          <label>Username</label>
          <input
            type="text"
            autoFocus
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </form>
        <StyledButton onClick={login}>login</StyledButton>
        <p>New to Our Website?</p>
        <Link to="/register">
          <StyledButton>create account</StyledButton>
        </Link>
      </FormContainer>
      {/* {listOfUsers.map((user) => {
        return (
          <div>
            <h1>name:{user.name}</h1>
            <h1>username:{user.username}</h1>
            <h1>password:{user.password}</h1>
          </div>
        );
      })} */}
    </Container>
  );
};

export default Login;
