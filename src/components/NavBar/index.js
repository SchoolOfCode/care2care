import styled from "styled-components";
import NavBarButtons from "./NavButtons";
import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLogo />
      <NavBarButtons />
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  position: fixed;
  z-index: 2;
  background: ${(props) => props.theme.bg};
  height: 120px;
  width: 100vw;
`;
