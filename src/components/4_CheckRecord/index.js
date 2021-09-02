import JSONPretty from "react-json-pretty";
import React, { useContext, useState } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App";
const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv";

const CheckRecordSheets = () => {
  const [record, setRecord] = useState("");
  const [data] = usePaparse(URL);
  const context = useContext(UserContext);
  //  to fetch the patient form the drop down
  // filter the records for that specific patient
  const filteredRecord = data.filter((item) =>
    item.Patient.includes(context.patient)
  );

  const mapFiltered =
    Array.isArray(filteredRecord) &&
    filteredRecord.map((item, index) => {
      return (
        <>
          <h3>{context.patient} </h3>
          <h3>Record: {item.Records}</h3>
          <p>Comment: {item.Comments}</p>
          <p>
            Posted by: {item.Email} | {item.Job_Title}
          </p>

          {/* <JSONPretty data={item} />; */}
        </>
      );
    });

  return <>{mapFiltered}</>;
};
export default CheckRecordSheets;
