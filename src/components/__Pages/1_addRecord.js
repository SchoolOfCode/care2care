//TO-DO ====================================================================================================================
//add the dropdown to select patient, that is gonna be sent to the form so we can fetch which patient we want to check the records from

import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../App.jsx";
import { StyledButton } from "../Styled/StyledButton";
import { StyledForm } from "../Styled/StyledForm";

const AddRecord = () => {
  const context = useContext(UserContext);
  const FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdm4S7YQmIWc0SPJ-nhxMZkbdWQLwAt3wXJYwXfVTsdaHySvQ/formResponse";
  const [job, setJob] = useState("");
  const [records, setRecords] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState("");
  const { user } = useAuth0();

  const validateComments = () => {
    if (comments.length === 0) {
      alert("Comments can't be blank");
      return false;
    }
    return true;
  };

  const validateForm = () => {
    if (!validateComments()) {
      setSubmitted(false);
      <p className="form-not-submitted">❌ Form not submitted</p>;
      return false;
    } else {
      setSubmitted(true);
      setFormSubmitted(<p className="form-submitted">✔️ Form submitted</p>);
      return true;
    }
  };

  // useEffect(() => {
  //   if (submitted) {
  //     setComments("");
  //     setSubmitted(false)
  //   }
  // }, [submitted]);

  return (
    <StyledAddRecord>
      <h1>ADD RECORD</h1>

      <StyledForm>
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>

        <form
          action={FORM_ACTION}
          method="post"
          target="hidden_iframe"
          onSubmit={(e) => {
            validateForm();
            if (!submitted) {
              e.preventDefault();
            } else {
              console.log("form submitted");
            }
          }}
        >
          {/* Patient =======================================================================================*/}
          <input
            type="text"
            name="entry.786976050"
            value={context.patient}
            placeholder="Patient not selected"
            readOnly
          />

          {/* Job Title [Staff] =======================================================================================*/}
          <select
            name="entry.31137095"
            onChange={(e) => setJob(e.target.value)}
            value={job}
            required
          >
            <option value="" disabled defaultValue hidden>
              Job Title [Staff]
            </option>
            <option value="Care Assistant">Care Assistant</option>
            <option value="Senior Care Assistant">Senior Care Assistant</option>
            <option value="Manager">Manager</option>
          </select>

          {/* Records =======================================================================================*/}

          <select
            name="entry.462237252"
            onChange={(e) => setRecords(e.target.value)}
            value={records}
            required
          >
            <option value="" disabled defaultValue hidden>
              Records
            </option>
            <option value="Wellbeing">Wellbeing</option>
            <option value="Personal Hygiene">Personal Hygiene</option>
            <option value="Incident and/or Accident">
              Incident and/or Accident
            </option>
            <option value="Food and/or Fluids">Food and/or Fluids</option>
            <option value="Output/Elimination">Output/Elimination</option>
            <option value="Body mapping">Body mapping</option>
            <option value="Daily Handover">Daily Handover</option>
            <option value="Medication">Medication</option>
            <option value="Professional visits">Professional visits</option>
            <option value="Family visits">Family visits</option>
            <option value="Statement Care Records">
              Statement Care Records
            </option>
            <option value="Evaluation">Evaluation</option>
            <option value="Resident Transfer Form">
              Resident Transfer Form
            </option>
          </select>

          {/* Comments =======================================================================================*/}

          <input
            type="text"
            name="entry.1817980315"
            value={comments}
            placeholder={"Comments"}
            onChange={(e) => setComments(e.target.value)}
          />

          <input
            className="hidden"
            type="text"
            name="entry.1626627283"
            value={user.email}
            readOnly
          />

          <div className="button">
            <StyledButton type="submit">SUBMIT</StyledButton>
          </div>

          <div className="submitted-status">{formSubmitted}</div>
        </form>
      </StyledForm>
    </StyledAddRecord>
  );
};

export default AddRecord;

const StyledAddRecord = styled.div`
  height: calc(100vh - 140px);

  .button {
    text-align: center;
  }
`;
