// import JSONPretty from "react-json-pretty";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DisplayFlex } from "../components/Styled/DisplayFlex";
import { StyledButton } from "../components/Styled/StyledButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <StyledProfile>
        <h1>PROFILE</h1>
        {/* <JSONPretty data={user} /> */}
        <img src={user.picture} alt={user.name} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className="buttons">
          <StyledButton>
            <Link to="/patient">Patients</Link>
          </StyledButton>
          <StyledButton>
            <Link to="/check">Records</Link>
          </StyledButton>
        </div>
      </StyledProfile>
    )
  );
};

export default Profile;

const StyledProfile = styled.div`
  ${DisplayFlex}
  margin-bottom: 30px;
  flex-direction: column;
  text-align: center;

  img {
    width: 150px;
    margin: 20px auto 0;
    border: 5px solid ${(props) => props.theme.accent1};
    border-radius: 50%;
  }

  .buttons {
    margin-top: 50px;

    button {
      margin: 0 10px;
    }

    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;
