import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../App.jsx";
import { Link } from "react-router-dom";
import { GetSelect } from "../GetInput/index.js";
import Title from "../StyledComponent/StyledTitle";
import NoInformation from "../StyledComponent/StyledNoInformation";
import MappedLogs from "../MappedLogs";
import { RowFlexCenter } from "../StyledComponent/StyledDisplay.js";

const DailyLogs = () => {
  const [records, setRecords] = useState("");
  const context = useContext(UserContext);

  return (
    <StyledWrapper>
      <Title text="Daily Logs" />
      <div>
        {!context.patient ? (
          <NoInformation text={"Please search for a patient"} />
        ) : (
          <div>
            <div className="patient-selected">
              <Link to="/patient">See Profile</Link>

              <GetSelect
                value={records}
                onChange={(e) => setRecords(e.target.value)}
                label={"Filter"}
                options={[
                  "Wellbeing",
                  "Personal Hygiene",
                  "Incident and/or Accident",
                  "Food and/or Fluids",
                  "Output/Elimination",
                  "Body mapping",
                  "Daily Handover",
                  "Medication",
                  "Professional visits",
                  "Family visits",
                  "Statement Care Records",
                  "Evaluation",
                  "Resident Transfer Form",
                ]}
              />
            </div>

            <MappedLogs context={context} records={records} />
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

export default DailyLogs;

const StyledWrapper = styled.div`
  .patient-selected {
    ${RowFlexCenter};
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
