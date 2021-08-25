import { Link } from "react-router-dom";
import styled from "styled-components";
import smallLogo from "../../images/smallLogo.svg";

const NavBar = () => {
  const tabs = [
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Patient",
      path: "/patient",
    },
    {
      title: "Add New Record",
      path: "/add",
    },
    {
      title: "Check Records",
      path: "/check",
    },
    {
      title: "Settings",
      path: "/settings",
    },
  ];

  return (
    <StyledNavBar>
      <img src={smallLogo} alt="" />
      {tabs.map((tab, index) => {
        return (
          <Link to={tab.path} key={index}>
            {tab.title}
          </Link>
        );
      })}
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
