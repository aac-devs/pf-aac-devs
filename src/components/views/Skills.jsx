import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  padding: 10px;
  height: 100vh;
  border-radius: 10px;

  background-color: pink;

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

const Skills = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Body>Body</Body>
    </Container>
  );
};

export default Skills;
