import { useState } from "react";
import styled from "styled-components";

const StyledFormInput = styled.div`
  small {
    display: none;
    color: #d00000;
    margin: 0.5em;
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
    width: 100%;
    outline: none;
  }
  input:hover {
    background-color: #eeeeee;
  }
  input:focus {
    border: 1px solid #ccc;
  }
  input:invalid[focused="true"] {
    border: 2px solid red;
  }
  input:invalid[focused="true"] ~ small {
    display: block;
  }
`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <StyledFormInput>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => {
          inputProps.name === "confirmPassword" && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <small>{errorMessage}</small>
    </StyledFormInput>
  );
};

export default FormInput;
