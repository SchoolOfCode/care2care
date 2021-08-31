import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";
import JSONPretty from "react-json-pretty";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";
const PatientSheets = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [patient, setPatient] = useState("");

  useEffect(() => {
    setLoading(true);

    Papa.parse(URL, {
      download: true,
      header: true,
      complete: (results) => {
        setLoading(false);
        setData(results.data);
      },
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredPatient = data.filter((item) =>
    item.Timestamp.includes(patient)
  );
  console.log(filteredPatient);

  const mapFiltered =
    Array.isArray(filteredPatient) &&
    filteredPatient.map((item, index) => {
      return (
        <ul key={index}>
          <img
            src={
              item.URL ||
              "https://static.thenounproject.com/png/3201525-200.png"
            }
            alt=""
          />
          <h3>{item.Patient}</h3>
          <div className="patient-info" key={index}>
            <p>Email: {item.Email}</p>
            <p>Date of Birth: {item.DoB}</p>
            <p>Allergies: {item.Allergies}</p>
            <p>Medications: {item.Medication}</p>
            <p>Address: {item.Address}</p>
            <p>Comments: {item.Comments}</p>
          </div>
          <JSONPretty data={item} />
        </ul>
      );
    });
  console.log(mapFiltered);

  const PatientDetails = () => {
    return (
      <>
        <h2>Details</h2>
        {mapFiltered}
      </>
    );
  };

  return (
    <StyledPatientProfile>
      <div>
        <select onChange={(e) => setPatient(e.target.value)} value={patient}>
          <option value="" disabled defaultValue>
            Select Patient
          </option>
          {data.map((item, index) => (
            <option key={index} value={item.Timestamp}>
              {item.Patient}
            </option>
          ))}
        </select>
      </div>

      <div>{!patient ? "" : <PatientDetails />}</div>
    </StyledPatientProfile>
  );
};

export default PatientSheets;

const StyledPatientProfile = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 150px;
    margin: 20px auto 0;
    border: 5px solid ${(props) => props.theme.accent1};
    border-radius: 50%;
    justify-self: center;
  }

  .patient-info {
    text-align: left;
  }
`;
