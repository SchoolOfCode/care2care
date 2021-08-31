import styled from "styled-components";

const NavLogo = () => {
  return (
    <StyledNavLogo>
      <h3>Care2Care</h3>
    </StyledNavLogo>
  );
};

export default NavLogo;

const StyledNavLogo = styled.div`
  padding: 10px 0;

  h3 {
    margin-left: 20px;
    color: ${(props) => props.theme.fontColor2};
  }
`;
