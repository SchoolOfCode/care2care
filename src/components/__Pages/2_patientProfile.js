//TO-DO ====================================================================================================================
//add a button/link that takes user to check the records of that user
//add a button/link that takes user to add new record
//when user is taken to the other screen, the dropdown is gonna be pre-set to whatever that patient is

// import JSONPretty from "react-json-pretty";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Sticky from "react-sticky-el";

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

  console.log(document.documentElement.scrollTop);
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
          <Sticky className="sticky" id={!sticky ? "not-sticky" : "sticky"}>
            <img
              src={
                item.Picture ||
                "https://static.thenounproject.com/png/3201525-200.png"
              }
              alt=""
            />
            <h3>{item.Patient}</h3>
          </Sticky>

          <div className="patient-info" key={index}>
            <div className="summary">
              <p>{item.Summary || ""}</p>
            </div>

            <div className="box">
              <GetInfo
                title={"Diagnosis"}
                className={"info"}
                item={item.Diagnosis}
              />
              <GetInfo
                title={"Allergies"}
                className={"info"}
                item={item.Allergies}
              />
              <GetInfo
                title={"Medication"}
                className={"info"}
                item={item.Medication}
              />
              <GetInfo title={"DNR"} className={"info"} item={item.DNR} />
            </div>

            <h3>Personal Information</h3>

            <div className="box">
              <GetInfo title={"Email"} className={"info"} item={item.Email} />
              <GetInfo
                title={"Date of Birth"}
                className={"info"}
                item={item.DoB}
              />
              <GetInfo
                title={"NHS Number"}
                className={"info"}
                item={item.NHS_Number}
              />
              <GetInfo title={"GP"} className={"info"} item={item.GP} />
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
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
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
    margin-top: 43px;
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
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    -moz-transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    -webkit-transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    -o-transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    -ms-transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
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
