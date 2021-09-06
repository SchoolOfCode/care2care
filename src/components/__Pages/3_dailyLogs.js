//TO-DO ====================================================================================================================
//add dropdown to selct patient (like in 1_patientProfile)
//fetch data from 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv'
//filter which patient we are fetching that data
//add a button that takes user to that patient profile

import React, { useContext } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App.jsx";
import NoPatientSelected from "../Styled/NoPatientSelected";
import { DisplayFlex } from "../Styled/DisplayFlex";
import styled from "styled-components";
import { Link } from "react-router-dom";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv";

const DailyLogs = () => {
  const [data] = usePaparse(URL);
  const context = useContext(UserContext);
  const filteredRecord = data.filter((item) =>
    item.Patient.includes(context.patient)
  );

  const mapFiltered =
    Array.isArray(filteredRecord) &&
    filteredRecord.map((item, index) => {
      return (
        <StyledMap>
          <div className="title-time">
            <h3>{item.Records}</h3>
            <p>{item.Timestamp}</p>
          </div>
          <p>{item.Comments}</p>
          <div className="posted-by">
            <p>Posted by: {item.Email}</p>
            <p>{item.Job_Title}</p>
          </div>
        </StyledMap>
      );
    });

  const DailyLogs = () => {
    return (
      <>
        <div className="patient-selected">
          <Link to="/patient">See Profile</Link>
          <h3>{context.patient}</h3>
        </div>
        {mapFiltered}
      </>
    );
  };

  return (
    <StyledDailyLogs>
      <h1>Daily Logs</h1>
      <div>{!context.patient ? <NoPatientSelected /> : <DailyLogs />}</div>
    </StyledDailyLogs>
  );
};
export default DailyLogs;

const StyledDailyLogs = styled.div`
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor1};
    background-color: ${(props) => props.theme.accent2};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .patient-selected {
    ${DisplayFlex}
    justify-content: space-around;
    max-width: 600px;
    margin: 30px auto 40px;
  }
`;

const StyledMap = styled.div`
  max-width: 600px;
  margin: 30px auto 50px;
  padding: 0 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h3 {
    margin: 10px 0;
  }

  .title-time {
    ${DisplayFlex}
    justify-content: space-between;

    p {
      background: ${(props) => props.theme.accent1};
      color: ${(props) => props.theme.fontColor1};
      font-size: 12px;
      padding: 2px 3px 4px;
      border-radius: 10px;
      position: relative;
      width: 50%;
      text-align: center;
      top: -22px;
      right: -10px;
    }

    h3 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 50%;
    }
  }

  .posted-by {
    ${DisplayFlex}
    justify-content: space-between;
    font-size: 10px;

    p {
      color: ${(props) => props.theme.menuBg};
      margin: 15px 0 5px;
      border-radius: 10px;
    }
  }
`;
