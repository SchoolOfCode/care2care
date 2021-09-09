import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import Title from "../StyledComponent/StyledTitle";
import MappedProfile from "../MappedProfile";
import {
  ColumnFlexCenter,
  RowFlexCenter,
} from "../StyledComponent/StyledDisplay";
import NoInformation from "../StyledComponent/StyledNoInformation";

const PatientProfile = () => {
  const [sticky, setSticky] = useState(false);

  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const context = useContext(UserContext);

  return (
    <StyledPatientProfile>
      <Title text={"Patient Profile"} />
      <div>
        {!context.patient ? (
          <NoInformation text={"Please select a patient"} />
        ) : (
          <MappedProfile context={context} sticky={sticky} />
        )}
      </div>
    </StyledPatientProfile>
  );
};

export default PatientProfile;

const StyledPatientProfile = styled.div`
  .sticky {
    ${RowFlexCenter}
    width: 100vw;
  }

  #sticky {
    height: 50px;
    width: 100vw;
    padding: 5px 0;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.bg};
    position: absolute;
    margin-top: 42.5px;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border: 2px solid ${(props) => props.theme.accent1};
    }

    h3 {
      font-size: 25px;
    }
  }

  img {
    object-fit: cover;
    width: 150px;
    height: 150px;
    max-height: 200px;
    border-radius: 50%;
    border: 5px solid ${(props) => props.theme.accent1};
  }

  ul {
    ${ColumnFlexCenter}
    width: 100vw;
  }

  h3 {
    font-size: 30px;
  }

  .patient-info {
    margin-top: 10px;
    padding: 0 30px;
    text-align: left;
    width: 50%;

    h3 {
      font-size: 20px;
      margin: 20px 0 10px;
    }

    @media (max-width: 738px) {
      width: 100vw;
    }
  }

  .summary {
    box-shadow: ${(props) => props.theme.notActive} 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;

    padding: 10px;
    margin-bottom: 25px;
    border-radius: 7px;
  }
`;
