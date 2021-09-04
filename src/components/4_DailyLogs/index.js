// import JSONPretty from "react-json-pretty";
// import JSONPretty from "react-json-pretty";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import usePaparse from "../__Hooks/usePaparse";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv";

const CheckRecordSheets = () => {
  const [data] = usePaparse(URL);
  const context = useContext(UserContext);

  const filteredRecord = data.filter((item) =>
    item.Patient.includes(context.patient)
  );

  const mapFiltered =
    Array.isArray(filteredRecord) &&
    filteredRecord.map((item, index) => {
      return (
        <>
          <h3>Record: {item.Records}</h3>
          <p>Comments: {item.Comments}</p>
          <p>
            Posted by: {item.Email} | {item.Job_Title}
          </p>
          <p>Time: {item.Timestamp}</p>
          {/* <JSONPretty data={item} />; */}
        </>
      );
    });

  return (
    <>
      <h3>{context.patient}</h3>
      <div>{mapFiltered}</div>
    </>
  );
};

export default CheckRecordSheets;
