import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  background-color: gold;
  font-size: 1.2rem;
  text-decoration: none;
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
  color: black;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>MOVIE LOG</h1>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/create">Create</StyledLink>
      <StyledLink to="/read">Read</StyledLink>
      <ul>
        <li>Register</li>
        <li>Login</li>
      </ul>
    </Nav>
  );
};

export default Navbar;
