import styled from "styled-components";
import Toggle from "../components/Styled/StyledToggle";
import useLocalStorage from "../components/__Hooks/useLocalStorage";
import { useContext } from "react";
import { UserContext } from "../App.jsx";
import LogoutButton from "../components/Styled/LogoutButton";
import { DisplayFlex } from "../components/Styled/DisplayFlex";

const Settings = (props) => {
  const [isOn, setIsOn] = useLocalStorage("isOn", false);
  const context = useContext(UserContext);
  return (
    <StyledSettings>
      <h1>SETTINGS</h1>
      <div className="settings-options theme-toggle">
        <h3>Theme</h3>
        <Toggle
          isOn={isOn}
          handleToggle={() => {
            context.changeTheme();
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
    margin: 0 20px 20px;
  }

  .theme-toggle {
    ${DisplayFlex}
    justify-content: space-between;

  }

  .button {
    position: absolute;
    left: 50%;
    margin-left: -75px;
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
