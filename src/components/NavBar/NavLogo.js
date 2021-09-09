import styled from "styled-components";
import { RowFlexSpace, RowFlexCenter } from "../StyledComponent/StyledDisplay";
import DropdownMenu from "./DropdownMenu";
import SearchButton from "./SearchButton";

const NavLogo = () => {
  return (
    <StyledNavLogo>
      <h3>Care2Care</h3>
      <div>
        <SearchButton />
        <DropdownMenu />
      </div>
    </StyledNavLogo>
  );
};

export default NavLogo;

const StyledNavLogo = styled.div`
  ${RowFlexSpace}
  justify-content: space-between;
  padding: 20px 10px 10px 20px;

  h3 {
    color: ${(props) => props.theme.fontColor2};
  }

  div {
    ${RowFlexCenter}
  }
`;
