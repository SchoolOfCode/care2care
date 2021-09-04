//TO-DO ====================================================================================================================
//learn how to use universal login from auth0
//change the login page from auth0 to a custom one with universal login
//lock which users can log in - has to be done in auth0 website

import LoginButton from "../components/Styled/LoginButton.js";
import NavBar from "../components/NavBar/index.js";
import Main from "../components/Main.js";
import styled from "styled-components";
import logo from "../images/logo.svg";
import SVG from "react-inlinesvg";
import { DisplayFlex } from "../components/Styled/DisplayFlex.js";

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
  ${DisplayFlex}
  flex-direction: column;
  background: ${(props) => props.theme.bg};
  width: 100vw;
  height: 100vh;
`;

const StyledSVG = styled(SVG)`
  max-width: 80vw;
  width: 350px;

  & path {
    fill: ${(props) => props.theme.accent1};
  }
`;
