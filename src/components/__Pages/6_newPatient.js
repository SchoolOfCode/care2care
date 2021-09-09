import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledForm } from "../Styled/StyledForm";
import { StyledButton } from "../Styled/StyledButton";

const NewPatient = () => {
  const FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc2chQVmTjiLtPqEqZCCHjnwnCLl0cMkiqLp4wD40bjCMiMnA/formResponse";

    const [summary, setSummary] = useState("");
    const [patientName, setPatientName] = useState("");
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
            className=""
            type="text"
            name="entry.1864384875"
            value={patientName}
            placeholder={"Name"}
          />

          <input
            sclassName=""
            type="text"
            name="entry.2035833587"
            value={summary}
            placeholder={"Summary"}
            />


          <input
            className=""
            type="text"
            name="entry.1633351042"
            value={email}
            placeholder={"Email"}
          />

          <input
            className=""
            type="text"
            name="entry.1523701268"
            value={picture}
            placeholder={"Picture link"}
          />

          <input
            className=""
            type="text"
            name="entry.1717570078"
            value={dob}
            placeholder={"Date of Birth"}
          />

          <input
            className=""
            type="text"
            name="entry.86638701"
            value={diagnosis}
            placeholder={"Diagnosis"}
          />

          <input
            className=""
            type="text"
            name="entry.790819135"
            value={allergies}
            placeholder={"Allergies"}
          />

          <input
            className=""
            type="text"
            name="entry.1789297383"
            value={address}
            placeholder={"Address"}
          />
          <input
            className=""
            type="text"
            name="entry.365648476"
            value={nhsNumber}
            placeholder={"NHS Number"}
          />

          <input
            className=""
            type="text"
            name="entry.1876095816"
            value={gp}
            placeholder={"Registered GP"}
          />

          <input
            className=""
            type="text"
            name="entry.1252200599"
            value={nextOfKin}
            placeholder={"Next of Kin"}
          />

          <input
            className=""
            type="text"
            name="entry.66985754"
            value={nextOfKinContact}
            placeholder={"Next of Kin Contacts"}
          />

          <input
            className=""
            type="text"
            name="entry.1981488507"
            value={medication}
            placeholder={"Medications"}
          />

          <input
            className=""
            type="text"
            name="entry.486109066"
            value={dnr}
            placeholder={"DNR (Do Not Resuscitate"}
          />

          <input
            className=""
            type="text"
            name="entry.1942624801"
            value={father}
            placeholder={"Father"}
          />

          <input
            className=""
            type="text"
            name="entry.888867955"
            value={mother}
            placeholder={"Mother"}
          />

          <inputs
            className=""
            type="text"
            name="entry.314012053"
            value={history}
            placeholder={"History"}
          />

          <div className="button">
            <StyledButton type="submit">Register</StyledButton>
          </div>

          <div className="submitted-status">{formSubmitted}</div>

      </StyledForm>

    </StyledNewPatient>
  );
};

export default NewPatient;

const StyledNewPatient = styled.div``;