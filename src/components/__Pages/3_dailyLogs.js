//TO-DO ====================================================================================================================
//add dropdown to selct patient (like in 1_patientProfile)
//fetch data from 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv'
//filter which patient we are fetching that data
//add a button that takes user to that patient profile

import React, { useContext, useState } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App.jsx";
import NoPatientSelected from "../Styled/NoPatientSelected";
import { DisplayFlex } from "../Styled/DisplayFlex";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FilterRecords from "../AllForms/3_FilterRecords.js";
import { icons } from "react-icons/lib";
import Icons from "../../theme/icons";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv";

const DailyLogs = () => {
  const [data] = usePaparse(URL);
  const [records, setRecords] = useState("");
  const context = useContext(UserContext);
  const filteredRecord = data.filter((item) =>
    item.Patient.includes(context.patient)
  );

  const mapFiltered =
    Array.isArray(filteredRecord) &&
    filteredRecord
      .filter((item) => item.Records.includes(records))
      .map((item, index) => {
        return (
          <StyledMap>
            <div className="title-time">
              <p>{item.Timestamp}</p>
              <h3>{item.Records}</h3>
            </div>
            <div className="icon-text">
              <Icons.Check className="icon" />
              <p>{item.Comments}</p>
            </div>
            <div className="icon-text">
              <Icons.PostedBy className="icon" />
              <p>Posted by: {item.Email}</p>
            </div>
            <div className="icon-text">
              <Icons.Job className="icon" />
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
        <FilterRecords records={records} setRecords={setRecords} />
        <StyledDailyLogs>{mapFiltered}</StyledDailyLogs>
      </>
    );
  };

  return (
    <>
      <h1>Daily Logs</h1>
      <div>{!context.patient ? <NoPatientSelected /> : <DailyLogs />}</div>
    </>
  );
};
export default DailyLogs;

const StyledDailyLogs = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 0 10px 20px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  border-radius: 5px;
`;

const StyledMap = styled.div`
  width: 100%;
  h3 {
    border-top: 1px solid ${(props) => props.theme.notActive};
    color: ${(props) => props.theme.fontColour2};
  }
  .title-time {
    margin-top: 20px;
    p {
      text-align: right;
      color: ${(props) => props.theme.accent2};
      font-weight: bold;
    }
  }
  .icon-text {
    display: flex;
    flex-direction: row;
    align-item: flex-start;
    font-size: 15px;
    @media (max-width: 738px) {
      font-size: 13px;
    }

    p {
      width: 90%;
    }
    .icon {
      margin-top: 3px;
      margin-right: 5px;
      color: ${(props) => props.theme.accent1};
    }
  }
`;
