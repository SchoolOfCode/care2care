import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import SelectPatient from "../SelectPatient";
import { StyledForm } from "../StyledForm";

const Form = () => {
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
    <StyledForm>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>

      <SelectPatient />

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
        <label>Patient ID</label>
        <input
          id={comments}
          type="text"
          name="entry.1575843700"
          value={context.patient}
          placeholder={"Type"}
        />

        <label>Patient</label>
        <input
          id={comments}
          type="text"
          name="entry.786976050"
          value={context.patient}
          placeholder={"Type"}
        />

        <label htmlFor={job}>What is your job title?</label>
        <select
          id={job}
          name="entry.31137095"
          onChange={(e) => setJob(e.target.value)}
          value={job}
        >
          <option value="" disabled defaultValue>
            Select
          </option>
          <option value="Care Assistant">Care Assistant</option>
          <option value="Senior Care Assistant">Senior Care Assistant</option>
          <option value="Manager">Manager</option>
        </select>

        <label htmlFor={records}>Records</label>
        <select
          id={records}
          name="entry.462237252"
          onChange={(e) => setRecords(e.target.value)}
          value={records}
        >
          <option value="" disabled defaultValue>
            Select
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
          <option value="Statement Care Records">Statement Care Records</option>
          <option value="Evaluation">Evaluation</option>
          <option value="Resident Transfer Form">Resident Transfer Form</option>
        </select>

        <label htmlFor={comments}>Comments</label>
        <input
          id={comments}
          type="text"
          name="entry.1817980315"
          value={comments}
          placeholder={"Type"}
          onChange={(e) => setComments(e.target.value)}
        />

        <label htmlFor={user.email}>HCP Email</label>
        <input
          id={user.email}
          type="text"
          name="entry.1626627283"
          value={user.email}
          readOnly
        />

        <div>
          <button type="submit">SUBMIT</button>
        </div>

        <div className="submitted-status">{formSubmitted}</div>
      </form>
    </StyledForm>
  );
};

export default Form;