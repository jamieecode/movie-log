import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
   margin:0;
   box-sizing: border-box;
   padding:0;
   font-family: 'Poppins', sans-serif;
 }


 button {
   background:none;
   border: none;
   cursor: pointer;
 }

 input {
  border: none;
 }

 input:focus {
   outline: none;
 }

`;

export default GlobalStyle;
