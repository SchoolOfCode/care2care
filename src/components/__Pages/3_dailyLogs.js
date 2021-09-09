import React, { useContext, useState } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App.jsx";
import { DisplayFlex } from "../Styled/DisplayFlex";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FilterRecords from "../FormComponents/3_FilterRecords.js";
import Icons from "../../theme/icons";
import NoInformation from "../Styled/NoInformation";

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
            <div className="posted-by">
              <div className="icon-text">
                <Icons.PostedBy className="icon" />
                <p>{item.Email}</p>
              </div>
              <div className="icon-text job">
                <Icons.Job className="icon" />
                <p>{item.Job_Title}</p>
              </div>
            </div>
          </StyledMap>
        );
      });

  return (
    <StyledWrapper>
      <h1>Daily Logs</h1>
      <div>
        {!context.patient ? (
          <NoInformation
          text={
            <div>
              <span>Please select a patient</span><Icons.Search className="icon"/>
            </div>
          }
        />
        ) : (
          <div>
            <div className="patient-selected">
              <Link to="/patient">See Profile</Link>
              <FilterRecords records={records} setRecords={setRecords} />
            </div>
            {mapFiltered.length === 0 ? (
              <NoInformation text={"No records found"} />
            ) : (
              <StyledDailyLogs>{mapFiltered}</StyledDailyLogs>
            )}
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};
export default DailyLogs;

const StyledDailyLogs = styled.div`
  box-shadow: ${(props) => props.theme.notActive} 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
    color: ${(props) => props.theme.fontColor2};
    margin-bottom: 5px;
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
    align-items: flex-start;
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

  .posted-by {
    display: flex;
    width: 100%;
    color: ${(props) => props.theme.notActive};
    margin-top: 5px;

    .job {
      margin-left: 20px;
    }

    p {
      font-size: 12px;
    }

    .icon {
      color: ${(props) => props.theme.notActive};
      font-size: 15px;
      margin-top: 2px;
    }
  }
`;

const StyledWrapper = styled.div`
  .patient-selected {
    ${DisplayFlex};
    justify-content: flex-end;
    width: 95%;
    margin-bottom: 20px;

    a,
    select {
      text-decoration: none;
      color: ${(props) => props.theme.accent2};
      font-weight: 700;
      padding: 5px 20px;
      cursor: pointer;
      text-align: center;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      border: none;
      background: ${(props) => props.theme.accent2};
      color: ${(props) => props.theme.fontColor1};
      border-radius: 5px;
      width: 90px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    icon-filter {
      font-size: 40px;
    }

    option {
      text-align: right;
      color: ${(props) => props.theme.fontColor2};
      background: ${(props) => props.theme.bg};
    }

    option:checked {
      background: ${(props) => props.theme.accent2};
      color: ${(props) => props.theme.fontColor1};
    }
  }
`;
