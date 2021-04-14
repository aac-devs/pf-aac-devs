import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  height: 100vh;
  border-radius: 10px;

  padding: 10px;
  background-color: purple;

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

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Body>Body</Body>
    </Container>
  );
};

export default Projects;
