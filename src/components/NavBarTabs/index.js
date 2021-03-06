import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../theme/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RowFlexSpace, RowFlexCenter } from "../StyledComponent/StyledDisplay";

const NavBarButtons = () => {
  const history = useHistory();
  const [link, setLink] = useState(window.location.pathname);

  useEffect(() => {
    return history.listen((location) => {
      setLink(location.pathname);
    });
  }, [history, link]);

  const tabs = [
    {
      icon: <Icons.AddRecord className="icon" />,
      title: "New Record",
      path: "/add",
    },
    {
      icon: <Icons.Patients className="icon" />,
      title: "Patient",
      path: "/",
    },
    {
      icon: <Icons.CheckRecords className="icon" />,
      title: "Daily Logs",
      path: "/logs",
    },
  ];

  return (
    <StyledNavBarButtons>
      <div className="tab-content">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`tabs ${link === tab.path ? "active" : ""}`}
            >
              <Link to={tab.path} key={index} className="tab-name">
                <div>{tab.icon}</div>
                <p>{tab.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </StyledNavBarButtons>
  );
};

export default NavBarButtons;

const StyledNavBarButtons = styled.nav`
  background: ${(props) => props.theme.navBg};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .tab-content {
    ${RowFlexSpace}
    justify-content: space-around;
    width: 100%;
    padding: 5px 2px 0;
  }

  .icon {
    margin-right: 5px;
    width: 20px;
    margin-bottom: -3px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.notActive};
    font-size: 24px;
  }

  .tab-name {
    ${RowFlexCenter}
    width: 33vw;

    p {
      font-size: 12px;
    }
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.accent1} !important;

    a {
      color: ${(props) => props.theme.accent1} !important;
      font-weight: bold;
    }
  }
`;
