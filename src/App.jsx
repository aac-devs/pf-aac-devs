import { HashRouter } from "react-router-dom";
import styled from "styled-components";
import {
  Navbar,
  Home,
  Portfolio,
  Projects,
  Skills,
  Contact,
} from "./components";
import GlobalStyle from "./global-styles";

const Container = styled.div`
  /* background-color: blue; */
  position: relative;
  /* min-height: 100%; */
  /* height: 100%; */
  display: grid;
  grid-template-columns: 100%;
  /* grid-template-rows: 70px 1fr 70px; */
  grid-template-rows: 1fr 70px;
  /* justify-content: center; */
  background-image: url(backscreen.jpg);
  filter: brightness(90%);

  @media (max-width: 768px) {
    /* grid-template-rows: 60px 1fr 60px; */
    grid-template-rows: 1fr 60px;
    /* padding-top: 60px; */
  }
`;

const Header = styled.div`
  /* background-color: #263238; */
  /* border-bottom: 1px solid black; */
  /* background-color: black; */
  box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.7);
  /* padding: 0 20px; */
  /* opacity: 0.7; */
  position: fixed;
  /* position: sticky; */
  width: 100%;
  height: 70px;
  top: 0px;
  left: 0;
  z-index: 10;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Main = styled.div`
  /* background-color: cyan; */
  /* align-self: center; */
  /* height: 100%; */
  /* padding: 10px; */
  max-width: 1024px;
  width: 100%;
  justify-self: center;
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 1fr; */
  /* gap: 10px; */
  /* margin: 0 auto; */
`;

const Footer = styled.div`
  background-color: black;
`;

export const App = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Container>
        <GlobalStyle />
        <Main>
          <Home />
          <Portfolio />
          <Skills />
          {/* <Projects /> */}
          <Contact />
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
};

// <HashRouter>
// </HashRouter>
