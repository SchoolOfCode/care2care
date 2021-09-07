import styled from "styled-components";
import { DisplayFlex } from "./DisplayFlex";

const Loading = () => {
  return <StyledLoading>Loading</StyledLoading>;
};

export default Loading;

const StyledLoading = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor2};
  width: 100%;
  height: 100%;
  
  ${DisplayFlex}
`;
