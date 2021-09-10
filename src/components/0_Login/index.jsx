import styled from "styled-components";
import SVG from "react-inlinesvg";
import NavBar from "../_NavBar/index.jsx";
import Main from "../Main.js/index.js";
import logo from "../../images/logo.svg";
import LoginButton from "../LoginButton"
import InstallPWA from "../InstallPWA";
import { DisplayFlex } from "../Styled/DisplayFlex.js";

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

  const StyledLogin = styled.div`
  ${DisplayFlex}
  flex-direction: column;
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