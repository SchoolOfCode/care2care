import styled from "styled-components";
import Toggle from "../components/StyledToggle";
import useLocalStorage from "../components/__Hooks/useLocalStorage";
import { useContext } from "react";
import { UserContext } from "../App.jsx";
import LogoutButton from "../components/Form/LogoutButton";

const Settings = (props) => {
  const [isOn, setIsOn] = useLocalStorage("isOn", false);
  const changeTheme = useContext(UserContext);
  return (
    <StyledSettings>
      <h1>SETTINGS</h1>
      <div className="settings-options theme-toggle">
        <h3>Theme</h3>
        <Toggle
          isOn={isOn}
          handleToggle={() => {
            changeTheme();
            setIsOn(!isOn);
          }}
        />
      </div>
      <div className="settings-options theme-toggle">
        <h3>Help</h3>
      </div>
      <div class="button">
        <LogoutButton />
      </div>
      <p className="team">UNITED NATIONS - 2021</p>
    </StyledSettings>
  );
};

export default Settings;

const StyledSettings = styled.div`
  .settings-options {
    margin: 0 40px 20px 20px;
  }

  .theme-toggle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 100px;
  }

  .team {
    position: absolute;
    right: 0;
    bottom: 0px;
    margin-right: 10px;
    font-weight: 600;
    font-size: 12px;
    color: #e1e1e1;
  }
`;
