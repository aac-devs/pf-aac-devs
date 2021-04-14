import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif, Helvetica, Arial;
  background-attachment: fixed;  
  /* background-image: url(backscreen.jpg); */
  /* -webkit-box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.52);
  -moz-box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.52);
  box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.52); */
  font-family: 'Work Sans', sans-serif;
  /* filter: brightness(90%); */
}

#root{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items:stretch; */
  height: 100%;

}

:root {
    --image-size: 230;
  
  }

`;

export default GlobalStyle;
