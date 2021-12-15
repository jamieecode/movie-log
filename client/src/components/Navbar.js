import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  background-color: #032541;
  font-size: 1.2rem;
  text-decoration: none;
  h1 {
    background-image: linear-gradient(
      to left,
      #01b4e4,
      #00bed6,
      #3ec5c3,
      #69cbb0,
      #8fcea1
    );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-underline: none;
    width: 15%;
  }

  li {
    color: #01b4e4;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #01b4e4;
`;

const Navbar = () => {
  const { user, dispatch } = useContext(LoginContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Nav>
      <h1>
        <RiMovie2Line style={{ color: "#99C9A6", marginRight: "0.5rem" }} />
        MOVIE LOG
      </h1>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>

      <StyledLink to="/create">Create</StyledLink>
      <StyledLink to="/post">Read</StyledLink>

      <ul>
        <li onClick={handleLogout}>{user && "Logout"}</li>
        {user ? (
          <img
            src="https://images.unsplash.com/photo-1575488405241-def30132aab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="user"
          />
        ) : (
          <>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
      </ul>
    </Nav>
  );
};

export default Navbar;
