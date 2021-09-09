import styled from "styled-components";
import Icons from "../../theme/icons";
import { RowFlexCenter } from "./StyledDisplay";

export const NoInformation = ({ text, iconClass }) => {
  return (
    <StyledNoInformation>
      <span>{text}</span>
      <Icons.Search className="icon" />
    </StyledNoInformation>
  );
};

export default NoInformation;

const StyledNoInformation = styled.div`
  ${RowFlexCenter}
  margin-top: 10px;

  .icon {
    margin-left: 10px;
  }
`;
