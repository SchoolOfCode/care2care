import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import SearchPatient from "./SearchPatient";

const NavLogo = () => {
  return (
    <StyledNavLogo>
      <h3>Care2Care</h3>
      <div>
        <SearchPatient />
        <DropdownMenu />
      </div>
    </StyledNavLogo>
  );
};

export default NavLogo;

const StyledNavLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 10px 20px;

  h3 {
    color: ${(props) => props.theme.fontColor2};
  }

  div {
    display: flex;
    align-items: center;
  }
`;
