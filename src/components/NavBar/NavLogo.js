import styled from "styled-components";
import Icons from "../../theme/icons";
import DropdownMenu from "./DropdownMenu";

const NavLogo = () => {
  return (
    <StyledNavLogo>
      <h3>Care2Care</h3>
      <DropdownMenu />
    </StyledNavLogo>
  );
};

export default NavLogo;

const StyledNavLogo = styled.div`
margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  h3 {
    color: ${(props) => props.theme.fontColor2};
  }
`;
