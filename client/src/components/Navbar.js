import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

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
    justify-content: space-evenly;
    list-style: none;
    text-underline: none;
    width: 15%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #01b4e4;
`;

const Navbar = () => {
  // const { loginUser, setLoginUser } = useContext(LoginContext);

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
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </ul>
    </Nav>
  );
};

export default Navbar;
