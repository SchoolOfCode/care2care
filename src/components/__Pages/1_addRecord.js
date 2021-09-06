//TO-DO ====================================================================================================================
//add the dropdown to select patient, that is gonna be sent to the form so we can fetch which patient we want to check the records from

import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../App.jsx";
import { StyledButton } from "../Styled/StyledButton";
import { StyledForm } from "../Styled/StyledForm";
import GetRecords from "../AllForms/1_GetRecords.js";
import GetJob from "../AllForms/1_GetJob.js";
import GetPatient from "../AllForms/1_GetPatient.js";
import GetComments from "../AllForms/1_GetComments.js";

// = lazy(() => import(""));
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

  const validatePatient = () => {
    return !context.patient ? alert("Please select a patient") : true;
  };
  const validateComments = () => {
    return !comments ? alert("Comments can't be blank") : true;
  };

  const validateForm = () => {
    if (!validateComments() || !validatePatient()) {
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
            if (!validateForm()) {
              e.preventDefault();
            }
          }}
        >
          <GetPatient context={context} />
          <GetJob job={job} setJob={setJob} />
          <GetRecords records={records} setRecords={setRecords} />
          <GetComments comments={comments} setComments={setComments} />

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
  .button {
    text-align: center;
  }
`;

const FormStatus = styled.p`
  text-align: center;
  color: ${(props) => props.theme.fontColor2};
`;
