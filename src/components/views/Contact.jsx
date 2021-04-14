import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  /* height: calc(100vh - 70px); */
  height: calc(100vh - 70px);

  border-radius: 10px;

  padding: 10px;
  background-color: green;

  padding-top: 80px;
  @media (max-width: 768px) {
    padding-top: 70px;
    height: calc(100vh - 60px);
  }
`;

const Title = styled.div`
  background-color: #fff;
`;

const Body = styled.div`
  background-color: gold;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Body>Body</Body>
    </Container>
  );
};

export default Contact;
