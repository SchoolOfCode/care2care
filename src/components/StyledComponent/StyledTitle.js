import styled from "styled-components";

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  margin: 40px 0 20px;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  color: black;
`;
