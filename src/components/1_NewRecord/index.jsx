import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App.jsx";
import { GetInput, GetSelect } from "../GetInput/index.js";
import Form from "../Form";
import Title from "../StyledComponent/StyledTitle";
import NoInformation from "../StyledComponent/StyledNoInformation.js";
import { FormStatus } from "../StyledComponent/StyledStatus";

const AddRecord = ({ children }) => {
  const [job, setJob] = useState("");
  const [records, setRecords] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState("");
  const context = useContext(UserContext);
  const { user } = useAuth0();

  const validateComments = () => {
    return !comments ? alert("Comments can't be blank") : true;
  };

  const validateForm = () => {
    if (!validateComments()) {
      setFormSubmitted(<FormStatus>❌ Form not submitted</FormStatus>);
      return false;
    } else {
      setSubmitted(true);
      setFormSubmitted(<FormStatus>✔️ Form submitted</FormStatus>);
      return true;
    }
  };

  useEffect(() => {
    if (submitted) {
      setRecords("");
      setJob("");
      setComments("");
      setSubmitted(false);
      const { msgSent } = setTimeout(() => setFormSubmitted(""), 4000);
      return () => {
        clearTimeout(msgSent);
      };
    } else {
      const { msgSent } = setTimeout(() => setFormSubmitted(""), 4000);
      return () => {
        clearTimeout(msgSent);
      };
    }
  }, [submitted]);

  return (
    <div>
      <Title text={"New Record"} />

      {!context.patient ? (
        <NoInformation text={"Please select a patient"} />
      ) : (
        <Form
          FORM_ACTION="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdm4S7YQmIWc0SPJ-nhxMZkbdWQLwAt3wXJYwXfVTsdaHySvQ/formResponse"
          validateForm={validateForm}
          formSubmitted={formSubmitted}
        >
          <GetInput
            entry={"entry.786976050"}
            value={context.patient}
            label={"Patient not selected"}
            readOnly={"true"}
          />

          <GetSelect
            entry={"entry.31137095"}
            value={job}
            label={"Select your job position"}
            onChange={(e) => setJob(e.target.value)}
            options={["Care Assistant", "Senior Care Assistant", "Manager"]}
          />

          <GetSelect
            entry="entry.462237252"
            value={records}
            label={"Records"}
            onChange={(e) => setRecords(e.target.value)}
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

          <GetInput
            entry={"entry.1817980315"}
            value={comments}
            label={"Comments"}
            onChange={(e) => setComments(e.target.value)}
          />

          <GetInput
            className="hidden"
            entry="entry.1626627283"
            value={user.email}
          />
        </Form>
      )}
    </div>
  );
};

export default AddRecord;
