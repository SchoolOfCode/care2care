import styled from "styled-components";
import { DisplayFlex } from "./DisplayFlex";

const NoInformation = ({ text }) => {
  return <StyledNoInformation>{text}</StyledNoInformation>;
};

export default NoInformation;

const StyledNoInformation = styled.div`
  text-align: center;

  div {
    ${DisplayFlex}
    margin-top: 10px;
  }

  .icon {
    margin-left: 10px;
  }
`;
