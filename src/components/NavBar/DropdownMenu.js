import { useEffect, useRef, useState, useContext } from "react";
import { UserContext } from "../../App.jsx";
import useLocalStorage from "../__Hooks/useLocalStorage";
import styled from "styled-components";
import Icons from "../../theme/icons";
import { DisplayFlex } from "../Styled/DisplayFlex";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import Toggle from "../Styled/StyledToggle";
import LogoutButton from "../Styled/LogoutButton";

const DropdownMenu = () => {
  const [isOn, setIsOn] = useLocalStorage("isOn", false);
  const context = useContext(UserContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <StyledDropdown>
      <Icons.Menu onClick={onClick} className="menu-trigger" aria-label="nav" />
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li className="profile">
            <ProfileMenu />
          </li>
          <li className="list">
            <p>Change Theme</p>
            <Toggle
              isOn={isOn}
              handleToggle={() => {
                context.changeTheme();
                setIsOn(!isOn);
              }}
            />
          </li>
          <li
            onClick={() => setIsActive(false)}
            className="list"
            aria-label=" Add New patient"
          >
            <Link to="/new">Add New Patient</Link>
            <Link to="/new">
              <Icons.NewPatient className="icon" />
            </Link>
          </li>
          <li className="button">
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </StyledDropdown>
  );
};

export default DropdownMenu;

const StyledDropdown = styled.div`
  .menu {
    background: ${(props) => props.theme.menuBg};
    color: ${(props) => props.theme.fontColor1};
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    -ms-backdrop-filter: blur(2px);
    border-radius: 8px;
    position: absolute;
    top: 50px;
    right: 20px;
    min-width: 200px;
    width: auto;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    font-size: 12px;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    z-index: 1;
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    border-bottom: 1px solid ${(props) => props.theme.notActive};
    text-align: right;
    :last-child {
      border: none;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.fontColor1};
      padding: 15px 0px;
      display: block;
    }
  }

  .menu-trigger {
    background: transparent;
    color: ${(props) => props.theme.fontColor2};
    cursor: pointer;
    border: none;
    width: auto;
    height: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }

  .profile {
    padding: 10px 0;
  }

  .list {
    ${DisplayFlex}
    justify-content: space-between;
    height: 40px;
    margin: 0 10px;

    .icon {
      font-size: 20px;
    }
  }

  .button {
    ${DisplayFlex}
    height: 50px;
    button {
      width: 90%;
      height: 30px;
    }
  }
`;
