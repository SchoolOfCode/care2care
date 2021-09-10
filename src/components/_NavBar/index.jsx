import { lazy, Suspense } from "react";
import Sticky from "react-sticky-el";
import styled from "styled-components";
import DropdownMenu from "../NavBarDropdown";
import SearchButton from "../SearchPatient";
import { RowFlexCenter, RowFlexSpace } from "../StyledComponent/StyledDisplay";
const NavBarButtons = lazy(() => import("../NavBarTabs"));

const NavBar = () => {
  return (
    <StyledNavBar>
      <Suspense fallback={""}>
        <StyledNavLogo>
          <h3>Care2Care</h3>
          <div>
            <SearchButton />
            <DropdownMenu />
          </div>
        </StyledNavLogo>
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
