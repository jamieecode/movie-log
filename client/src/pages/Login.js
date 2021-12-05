import { Link } from "react-router-dom";
import styled from "styled-components";

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
    margin-bottom: 1em;
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
  margin-top: 2em;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 2em;
  &:hover {
    background-color: #01b4e4;
    transition: 0.5s;
  }
`;

const Account = () => {
  return (
    <Container>
      <h2>Sign In</h2>
      <FormContainer>
        <form>
          <label>ID</label>
          <input type="text" autoFocus />
          <label>Password</label>
          <input type="text" />
        </form>
        <StyledButton>sign in</StyledButton>
        <Link to="/register">
          <StyledButton>create account</StyledButton>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Account;
