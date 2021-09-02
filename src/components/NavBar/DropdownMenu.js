import { useEffect, useRef, useState } from "react";
import Icons from "../../theme/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const DropdownMenu = () => {
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
      <Icons.Menu onClick={onClick} className="menu-trigger" />
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li onClick={() => setIsActive(false)}>
            <Link to="/profile">
              <ProfileMenu />
            </Link>
          </li>
          <li onClick={() => setIsActive(false)}>
            <Link to="/settings">Settings</Link>
          </li>
          <li onClick={() => setIsActive(false)}>
            <Link to="/new">+ New Patient</Link>
          </li>
        </ul>
      </nav>
    </StyledDropdown>
  );
};

export default DropdownMenu;

const StyledDropdown = styled.div`
  .menu {
    background: ${(props) => props.theme.fontColor2};
    border-radius: 8px;
    position: absolute;
    top: 50px;
    right: 20px;
    width: 50vw;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
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
      padding: 15px 20px;
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
`;
