import React, { useContext } from "react";
import { UserContext } from "../../App";
// import styled from "styled-components";
import usePaparse from "../__Hooks/usePaparse";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";

const SelectPatient = () => {
  const [data] = usePaparse(URL);
  const context = useContext(UserContext);
  return (
    <div>
      <select
        onChange={(e) => context.setPatient(e.target.value)}
        value={context.patient}
      >
        <option value="" disabled defaultValue>
          Select Patient
        </option>
        {data.map((item, index) => (
          <option key={index} value={item.ID}>
            {item.Patient}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPatient;
