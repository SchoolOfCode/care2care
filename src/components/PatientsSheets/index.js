import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv"
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

  const filteredPatient = data.filter((item) => item.Patient.includes(patient));
  console.log(filteredPatient);

  const mapFiltered =
    Array.isArray(filteredPatient) &&
    filteredPatient.map((item) => <li>{item.Allergies}</li>);
  console.log(mapFiltered);

  return (
    <>
      <div>
        <label>Select a patient</label>
        <select onChange={(e) => setPatient(e.target.value)} value={patient}>
          {data.map((item) => (
            <option value={item.Patient}>{item.Patient}</option>
          ))}
        </select>
      </div>

      <div>
        <h1>Details</h1>
        {!patient ? "" : <ul>{mapFiltered}</ul>}

      
      </div>
    </>
  );
};

export default PatientSheets;
