import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { StyledButton } from "../Styled/StyledButton";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    
      <StyledLoginButton onClick={loginWithRedirect}>Log In</StyledLoginButton>
    
  );
};

export default LoginButton;

const StyledLoginButton = styled(StyledButton)`
  background: rgb(31, 193, 27);
`;
