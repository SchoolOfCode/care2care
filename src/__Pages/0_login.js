import LoginButton from "../components/LoginButton";
import NavBar from "../components/NavBar.js";
import Main from "../components/Main.js";
import styled from "styled-components";
import logo from "../images/logo.svg";
import SVG from "react-inlinesvg";

export const NotAuthenticated = () => {
  return (
    <StyledLogin>
      <StyledSVG src={logo} alt="" />
      <LoginButton />
    </StyledLogin>
  );
};

export const Authenticated = () => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};

const StyledLogin = styled.div`
  background: ${(props) => props.theme.bg};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled(SVG)`
  max-width: 80vw;
  width: 350px;

  & path {
    fill: ${(props) => props.theme.accent1};
  }
`;
