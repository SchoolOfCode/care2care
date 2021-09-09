import styled from "styled-components";
import SVG from "react-inlinesvg";
import NavBar from "../NavBar/index.js";
import Main from "../Main.js/index.js";
import logo from "../../images/logo.svg";
import InstallPWA from "../InstallPWA";
import { DisplayFlex } from "../Styled/DisplayFlex.js";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButton } from "../StyledComponent/StyledButton.js";
import { ColumnFlexCenter } from "../StyledComponent/StyledDisplay.js";

export const NotAuthenticated = () => {
  return (
    <StyledLogin>
      <StyledSVG src={logo} alt="" />
      <div className="buttons">
        <LoginButton />
        <InstallPWA />
      </div>
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

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <StyledButton onClick={loginWithRedirect}>Log In</StyledButton>;
};

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>;
};


// STYLED COMPONENTS ======================================================================================================================================================
const StyledLogoutButton = styled(StyledButton)`
  background: rgb(255, 85, 85);
`;

const StyledLogin = styled.div`
  ${ColumnFlexCenter}
  background: ${(props) => props.theme.bg};
  width: 100vw;
  height: 100vh;

  .buttons {
    margin-top: 50px;

    button {
      margin: 0 10px;
      background: ${(props) => props.theme.accent1};

      @media (max-width: 738px) {
        width: 40vw;
      }
    }
  }
`;

const StyledSVG = styled(SVG)`
  max-width: 80vw;
  width: 350px;

  & path {
    fill: ${(props) => props.theme.accent1};
  }
`;
