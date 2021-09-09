import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledForm } from "../Styled/StyledForm";
import { StyledButton } from "../Styled/StyledButton";

const NewPatient = () => {
  const FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc2chQVmTjiLtPqEqZCCHjnwnCLl0cMkiqLp4wD40bjCMiMnA/formResponse";

    const [summary, setSummary] = useState("");
    const [newPatient, setPatientName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");
    const [dob, setDob] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [allergies, setAllergies] = useState("");
    const [address, setAddress] = useState("");
    const [nhsNumber, setNhsNumber] = useState("");
    const [gp, setGp] = useState("");
    const [nextOfKin, setNextOfKin] = useState("");
    const [nextOfKinContact, setNextOfKinContact] = useState("");
    const [medication, setMedication] = useState("");
    const [dnr, setDnr] = useState("");
    const [father, setFather] = useState("");
    const [mother, setMother] = useState("");
    const [history, setHistory] = useState("");
    const [formSubmitted, setFormSubmitted] = useState("");


  return (
    <StyledNewPatient>
      <h1>Add New Patient</h1>

      <StyledForm>
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>

          <input
            // className="hidden"
            // label="Patient Name"
            type="text"
            name="entry.2035833587"
            value={summary}
            placeholder={"Patient Name"}
            />

          <input
            className="hidden"
            type="text"
            name="entry.1864384875"
            value={newPatient.patient}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1633351042"
            value={newPatient.email}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1523701268"
            value={newPatient.picture}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1717570078"
            value={newPatient.dob}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.86638701"
            value={newPatient.diagnosis}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.790819135"
            value={newPatient.allergies}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1789297383"
            value={newPatient.address}
            readOnly
          />
          <input
            className="hidden"
            type="text"
            name="entry.365648476"
            value={newPatient.nhsNumber}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1876095816"
            value={newPatient.gp}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1252200599"
            value={newPatient.nextOfKin}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.66985754"
            value={newPatient.nextOfKinContact}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1981488507"
            value={newPatient.medication}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.486109066"
            value={newPatient.dnr}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.1942624801"
            value={newPatient.father}
            readOnly
          />

          <input
            className="hidden"
            type="text"
            name="entry.888867955"
            value={newPatient.mother}
            readOnly
          />

          <inputs
            className="hidden"
            type="text"
            name="entry.314012053"
            value={newPatient.history}
            readOnly
          />

          <div className="button">
            <StyledButton type="submit">SUBMIT</StyledButton>
          </div>

          <div className="submitted-status">{formSubmitted}</div>

      </StyledForm>

    </StyledNewPatient>
  );
};

export default NewPatient;

const StyledNewPatient = styled.div``;