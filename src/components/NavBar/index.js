import styled from "styled-components";
import NavBarButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import Sticky from "react-sticky-el";


const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLogo />
      <Sticky>

      <NavBarButtons />
      </Sticky>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  background: ${(props) => props.theme.navBg};
 height: 90px;
  width: 100vw;
`;
