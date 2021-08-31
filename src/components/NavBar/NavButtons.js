import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../theme/icons";
import smallLogo from "../../images/smallLogo.svg";
import SVG from "react-inlinesvg";

const NavBarButtons = () => {
  const tabs = [
    {
      icon: <Icons.Patients />,
      title: "Patient",
      path: "/patient",
    },
    {
      icon: <Icons.AddRecord />,
      title: "Add New Record",
      path: "/add",
    },
    {
      icon: <Icons.Profile />,
      title: "Profile",
      path: "/profile",
    },
    {
      icon: <Icons.CheckRecords />,
      title: "Check Records",
      path: "/check",
    },
    {
      icon: <Icons.Settings />,
      title: "Settings",
      path: "/settings",
    },
  ];

  return (
    <StyledNavBarButtons>
      <div className="logo">
        <StyledSVG src={smallLogo} alt="" />
      </div>
      <div className="icons">
        {tabs.map((tab, index) => {
          return (
            <Link to={tab.path} key={index}>
              {tab.icon}
            </Link>
          );
        })}
      </div>
    </StyledNavBarButtons>
  );
};

export default NavBarButtons;

const StyledNavBarButtons = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  .icons {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 798px) {
      width: 100%;
    }
  }

  a {
    color: ${(props) => props.theme.fontColor1};
    font-size: 24px;
  }

  .logo {
    @media (max-width: 798px) {
      display: none;
    }
  }
`;

const StyledSVG = styled(SVG)`
  max-width: 77px;

  & path {
    fill: ${(props) => props.theme.fontColor1};
  }
`;
