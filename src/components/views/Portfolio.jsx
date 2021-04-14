import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  /* height: 87vh; */
  /* height: calc(100vh - 90px); */
  height: 50vh;
  border-radius: 10px;

  padding: 10px;
  background-color: red;

  padding-top: 80px;
  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Title = styled.div`
  background-color: #fff;
`;

const Body = styled.div`
  background-color: gold;
`;

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <Title>Portfolio</Title>
      <Body>Body</Body>
    </Container>
  );
};

export default Portfolio;
