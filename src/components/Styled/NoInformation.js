import styled from "styled-components";

const NoInformation = ({ text }) => {
  return (
    <StyledNoInformation>
      <p>{text}</p>
    </StyledNoInformation>
  );
};

export default NoInformation;

const StyledNoInformation = styled.div`
  text-align: center;

  p::before {
    content: '⚠️'
  }
`;
