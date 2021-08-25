import styled from "styled-components";
import LogoutButton from "../components/LogoutButton";
import Toggle from "../components/StyledToggle";
import useLocalStorage from "../components/__Hooks/useLocalStorage";

const Settings = (props) => {
  const [isOn, setIsOn] = useLocalStorage("isOn", false);

  return (
    <StyledSettings>
      <h1>SETTINGS</h1>
      <div class="settings-options theme-toggle">
        <h3>Theme</h3>
        <Toggle
          isOn={isOn}
          handleToggle={() => {
            props.changeTheme();
            setIsOn(!isOn);
          }}
        />
      </div>
      <div class="settings-options theme-toggle">
        <h3>Help</h3>
      </div>
      <div class="button">
        <LogoutButton />
      </div>
    </StyledSettings>
  );
};

export default Settings;

const StyledSettings = styled.div`
  .settings-options {
    margin: 0 20px 20px 20px;
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
`;
