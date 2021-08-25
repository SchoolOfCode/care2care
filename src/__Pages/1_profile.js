import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import LogoutButton from "../components/LogoutButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <StyledProfile>
        <img src={user.picture} alt={user.name} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

        <LogoutButton />
      </StyledProfile>
    )
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  img {
    width: 60px;
    border: 2px solid rgb(85, 91, 255);
    border-radius: 50%;
    margin-right: 10px;
  }
`;
