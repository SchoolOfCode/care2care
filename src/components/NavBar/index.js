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
  background: ${(props) => props.theme.bg};
`;
