//TO-DO ====================================================================================================================
//add a button/link that takes user to check the records of that user
//add a button/link that takes user to add new record
//when user is taken to the other screen, the dropdown is gonna be pre-set to whatever that patient is

// import JSONPretty from "react-json-pretty";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App";
import { DisplayFlex } from "../Styled/DisplayFlex";
import NoPatientSelected from "../Styled/NoPatientSelected";
import GetInfo from "../AllForms/2_GetInfo";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";

const PatientProfile = () => {
  const [sticky, setSticky] = useState(false);
  window.onscroll = function () {
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
          <div className="sticky" id={!sticky ? "not-sticky" : "sticky"}>
            <img
              src={
                item.Picture ||
                "https://static.thenounproject.com/png/3201525-200.png"
              }
              alt=""
            />
            <h3>{item.Patient}</h3>
          </div>

          <div className="patient-info" key={index}>
            <div className="summary">
              <p>{item.Summary || ""}</p>
            </div>

            <div className="box">
              <GetInfo
                title={"Diagnosis"}
                className={"info"}
                item={item.Diagnosis}
                text={"No Information Available"}
              />
              <GetInfo
                title={"Allergies"}
                className={"info"}
                item={item.Allergies}
                text={"No Information Available"}
              />
              <GetInfo
                title={"Medication"}
                className={"info"}
                item={item.Medication}
                text={"No Information Available"}
              />
              <GetInfo
                title={"DNR"}
                className={"info"}
                item={item.DNR}
                text={"No Information Available"}
              />
            </div>

            <h3>Personal Information</h3>

            <div className="box">
              <GetInfo
                title={"Email"}
                className={"info"}
                item={item.Email}
                text={"No Information Available"}
              />
              <GetInfo
                title={"Date of Birth"}
                className={"info"}
                item={item.DoB}
                text={"No Information Available"}
              />
              <GetInfo
                title={"NHS Number"}
                className={"info"}
                item={item.NHS_Number}
                text={"No Information Available"}
              />
              <GetInfo
                title={"GP"}
                className={"info"}
                item={item.GP}
                text={"No Information Available"}
              />
              <div className="info">
                <h4>Next of Kin</h4>
                <span>
                  <p>{item.NextOfKin || "No Information Available"}</p>
                  <p>{item.NoK_Contact}</p>
                </span>
              </div>
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
      <h1>Patient Profile</h1>
      <div>{!context.patient ? <NoPatientSelected /> : <PatientDetails />}</div>
    </StyledPatientProfile>
  );
};

export default PatientProfile;

const StyledPatientProfile = styled.div`
  .box {
    padding: 1px 10px 15px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    :last-child {
      margin-bottom: 50px;
    }
  }

  .sticky {
    ${DisplayFlex};
    position: sticky;
  }

  #sticky {
    flex-direction: row;
    margin-bottom: 10px;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border: 2px solid ${(props) => props.theme.accent1};
    }

    h3 {
      font-size: 20px;
    }
  }

  #not-sticky {
    flex-direction: column;
    margin-bottom: 10px;

    img {
      width: 150px;
      height: 150px;
      border: 5px solid ${(props) => props.theme.accent1};
      justify-self: center;
      object-fit: cover;
    }
  }

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  ul {
    ${DisplayFlex}
    flex-direction: column;
    width: 100vw;
  }

  h3 {
    font-size: 30px;
  }

  .summary {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 10px;
    margin-bottom: 25px;
    border-radius: 7px;
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

    h4 {
      color: ${(props) => props.theme.accent1};
      border-bottom: ${(props) => props.theme.accent1} 1px solid;
    }

    .info {
      margin-top: 15px;

      p {
        margin-top: 4px;
      }
      span {
        ${DisplayFlex};
        justify-content: space-between;
      }
    }

    @media (max-width: 738px) {
      width: 100vw;
    }
  }
`;
