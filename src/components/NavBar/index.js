import { lazy, Suspense } from "react";
import Sticky from "react-sticky-el";
import styled from "styled-components";
const NavBarButtons = lazy(() => import("./NavButtons"));
const NavLogo = lazy(() => import("./NavLogo"));

const NavBar = () => {
  return (
    <StyledNavBar>
      <Suspense fallback={""}>
        <NavLogo />
        <Sticky>
          <NavBarButtons />
        </Sticky>
      </Suspense>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.navBg};
  height: 90px;
  width: 100vw;
`;
