import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { StyledButton } from "../Styled/StyledButton";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>;
};

export default LogoutButton;

const StyledLogoutButton = styled(StyledButton)`
  background: rgb(255, 85, 85);
`;