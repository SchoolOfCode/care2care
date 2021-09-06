// import JSONPretty from "react-json-pretty";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledBGProfile } from "../Styled/StyledBGProfile";
import { StyledButton } from "../Styled/StyledButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <StyledProfile>
        <h1>PROFILE</h1>
        {/* <JSONPretty data={user} /> */}
        <div className="background">
          <img src={user.picture} alt={user.name} />
        </div>
        <div className="info">
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
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
   display: none;
  }

  .background {
    ${StyledBGProfile}
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: relative;
    top: -99px;
    height: 260px;
    z-index: -1;
  }

  img {
    width: 150px;
    border-radius: 50%;
    position: relative;
    top: 170px;
  }

  .info {
    margin-top: -20px;
  }

  .buttons {
    margin-top: 50px;

    button {
      margin: 0 10px;

      @media (max-width: 738px) {
        width: 40vw;
      }
    }

    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;
