import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  height: 100vh;
  border-radius: 10px;
  /* padding: 10px; */
  /* box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.82); */
  /* filter: brightness(80%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: dodgerblue; */
  @media (max-width: 768px) {
    /* height: calc(100vh - 90px); */
  }
`;

const Title = styled.div`
  /* background-color: #fff; */
  font-size: 24px;
  color: white;
`;

const Body = styled.div`
  /* background-color: gold; */
  /* background-color: #000; */
  /* opacity: 0.5; */
  padding: 10px;
  border-radius: 10px;
  /* border: 3px solid #000; */
  width: 100%;
  text-align: center;
  h1 {
    color: #ff004d;
    font-weight: 600;
    font-size: 28px;
    /* margin-bottom: 7px; */
    text-shadow: 4px 4px 7px #222;
    span {
      font-weight: 400;
    }
  }
  h2 {
    color: #ff5b79;
    font-weight: 400;
    font-size: 18px;
    text-shadow: 4px 4px 7px #222;
  }
  @media (min-width: 767px) {
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 23px;
    }
  }
  @media (min-width: 1023px) {
    h1 {
      font-size: 47px;
    }
    h2 {
      font-size: 30px;
    }
  }
`;

const Image = styled.div`
  height: 150px;
  width: 150px;
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  /* margin-top: 10%; */
  margin-bottom: 5px;
  /* background-image: url(fondo.jpg); */
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: brightness(80%); */
  overflow: hidden;
  -webkit-box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.82);
  -moz-box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.82);
  box-shadow: 2px 3px 25px -2px rgba(33, 33, 33, 0.82);

  img {
    transform: scale(0.65);
    width: 195px;
    margin-top: -33px;
    margin-left: -21px;
    filter: drop-shadow(0px 0px 30px #fff);
  }
  @media (min-width: 767px) {
    /* background-color: dodgerblue; */
    height: 200px;
    width: 200px;
    min-width: 200px;
    min-height: 200px;
    img {
      width: 260px;
      margin-top: -44px;
      margin-left: -28px;
    }
  }
  @media (min-width: 1023px) {
    /* background-color: springgreen; */
    height: 250px;
    width: 250px;
    min-width: 250px;
    min-height: 250px;
    img {
      width: 325px;
      margin-top: -55px;
      margin-left: -35px;
    }
  }
`;

const Home = () => {
  return (
    <Container id="home">
      <Image>
        <img src="foto.png" alt="foto" />
      </Image>
      <Body>
        <h1>
          <span>Andrés</span> Arana Castillo
        </h1>
        <h2>Fullstack web development</h2>
      </Body>
    </Container>
  );
};

export default Home;
