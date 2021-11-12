import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
   margin:0;
   box-sizing: border-box;
   padding:0
 }


 body {
   font-family: 'Poppins', sans-serif;
 }

 section {
   padding-top: 2em;
 }

 button {
   background:none;
   border: none;
   cursor: pointer;
 }

`;

export default GlobalStyle;
