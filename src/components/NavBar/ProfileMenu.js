import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileMenu = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <StyledProfileMenu>
        <img src={user.picture} alt={user.name} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </StyledProfileMenu>
    )
  );
};

export default ProfileMenu;

const StyledProfileMenu = styled.div`
  color: ${(props) => props.theme.fontColor1};

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 15px;
  }

  p {
    font-size: 10px;
  }

  img {
    width: 40px;
    margin: 5px 5px 0 5px;
    border-radius: 50%;
    justify-self: center;
  }
`;
