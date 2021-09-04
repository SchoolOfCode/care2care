// import JSONPretty from "react-json-pretty";
import React, { useContext } from "react";
import styled from "styled-components";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App";
import { DisplayFlex } from "../Styled/DisplayFlex";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";

const PatientSheets = () => {
  const [data] = usePaparse(URL);
  const context = useContext(UserContext);

  const filteredPatient = data.filter((item) =>
    item.Patient.includes(context.patient)
  );

  const mapFiltered =
    Array.isArray(filteredPatient) &&
    filteredPatient.map((item, index) => {
      return (
        <ul key={index}>
          <img
            src={
              item.Picture ||
              "https://static.thenounproject.com/png/3201525-200.png"
            }
            alt=""
          />
          <h3>{item.Patient}</h3>
          <div className="patient-info" key={index}>
            <div className="info">
              <h4>Summary</h4>
              <p>{item.Summary || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>Diagnosis</h4>
              <p>{item.Diagnosis || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>Allergies</h4>
              <p>{item.Allergies || "No Information Available"}</p>
            </div>
            <div className="info">
              <h4>Medication</h4>
              <p>{item.Medication || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>DNR</h4>
              <p>{item.DNR || "No Information Available"}</p>
            </div>

            <h3>Personal Information</h3>
            <div className="info">
              <h4>Email</h4>
              <p>{item.Email || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>Date of Birth</h4>
              <p>{item.DoB || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>NHS Number</h4>
              <p>{item.NHS_Number || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>GP</h4>
              <p>{item.GP || "No Information Available"}</p>
            </div>

            <div className="info">
              <h4>Next of Kin</h4>
              <span>
                <p>{item.NextOfKin || "No Information Available"}</p>
                <p>{item.NoK_Contact}</p>
              </span>
            </div>
          </div>
          {/* <JSONPretty data={item} /> */}
        </ul>
      );
    });

  const PatientDetails = () => {
    return <>{mapFiltered}</>;
  };

  return (
    <StyledPatientProfile>
      <div>{!context.patient ? "No patient selected" : <PatientDetails />}</div>
    </StyledPatientProfile>
  );
};

export default PatientSheets;

const StyledPatientProfile = styled.div`
  ul {
    ${DisplayFlex}
    flex-direction: column;
    width: 100vw;
  }

  img {
    width: 150px;
    height: 150px;
    margin: 20px auto 0;
    border: 5px solid ${(props) => props.theme.accent1};
    border-radius: 50%;
    justify-self: center;
    object-fit: cover;
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
      margin-bottom: 10px;
    }
    
    h4 {
      color: ${(props) => props.theme.accent1};
      border-bottom: ${(props) => props.theme.accent1} 1px solid;
    }
    .info {
      margin-bottom: 15px;

      span {
        ${DisplayFlex};
        justify-content: space-between;
      }
    }

    @media (max-width: 738px) {
      width: 90vw;
    }
  }
`;
