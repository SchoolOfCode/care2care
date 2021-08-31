// import JSONPretty from "react-json-pretty";
import React, { useContext, useState } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../Main.js/index.js";
import SelectPatientDropdown from "../SelectPatientDropdown";
import JSONPretty from "react-json-pretty";
const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv";

const CheckRecordSheets = () => {
  const [record, setRecord] = useState("");
  const [data] = usePaparse(URL);
  const context = useContext(UserContext);
  //  to fetch the patient form the drop down
  // filter the records for that specific patient
  const filteredRecord = data.filter((item) => item.Timestamp.includes(record));

  const mapFiltered =
    Array.isArray(filteredRecord) &&
    filteredRecord.map((item, index) => {
      return <JSONPretty data={item} />;
    });

  return (
    <>
      <SelectPatientDropdown />
      {mapFiltered}
    </>
  );
};

export default CheckRecordSheets;
