import styled from "styled-components";
import { RowFlexSpace } from "./StyledDisplay";

const Box = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;

const StyledBox = styled.div`
  padding: 1px 10px 15px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow} 0px 1px 4px;

  :last-child {
    margin-bottom: 100px;
  }

  h4 {
    color: ${(props) => props.theme.accent1};
    border-bottom: ${(props) => props.theme.accent1} 1px solid;
  }

  .info {
    margin-top: 15px;

    p {
      margin-top: 4px;
    }
    span {
      ${RowFlexSpace};
    }
  }

 
`;
