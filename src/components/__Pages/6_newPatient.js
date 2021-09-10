import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledForm } from "../Styled/StyledForm";
import { RegisterButton } from "../Styled/RegisterButton";

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
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
      if (submitted) {
        // setRecords("");
        // setJob("");
        // setComments("");
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

    // useEffect(() => {
    //   if (formSubmitted) {
    //     setFormSubmitted(false);
    //     const { msgSent } = setTimeout(() => setFormSubmitted(""), 4000);
    //     return () => {
    //       clearTimeout(msgSent);
    //     };
    //   } else {
    //     const { msgSent } = setTimeout(() => setFormSubmitted(""), 4000);
    //     return () => {
    //       clearTimeout(msgSent);
    //     };
    //   }
    // }, [formSubmitted]);
  

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

        <form
          action={FORM_ACTION}
          method="post"
          target="hidden_iframe"
          onSubmit={(e) => {
            setSubmitted(true);
            }
          }
        >

          <input
            className=""
            type="text"
            name="entry.1864384875"
            value={patientName}
            placeholder={"Name"}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <input
            sclassName=""
            type="text"
            name="entry.2035833587"
            value={summary}
            placeholder={"Summary"}
            onChange={(e) => setSummary(e.target.value)}
            />


          <input
            className=""
            type="text"
            name="entry.1633351042"
            value={email}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1523701268"
            value={picture}
            placeholder={"Picture link"}
            onChange={(e) => setPicture(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1717570078"
            value={dob}
            placeholder={"Date of Birth"}
            onChange={(e) => setDob(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.86638701"
            value={diagnosis}
            placeholder={"Diagnosis"}
            onChange={(e) => setDiagnosis(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.790819135"
            value={allergies}
            placeholder={"Allergies"}
            onChange={(e) => setAllergies(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1789297383"
            value={address}
            placeholder={"Address"}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className=""
            type="text"
            name="entry.365648476"
            value={nhsNumber}
            placeholder={"NHS Number"}
            onChange={(e) => setNhsNumber(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1876095816"
            value={gp}
            placeholder={"Registered GP"}
            onChange={(e) => setGp(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1252200599"
            value={nextOfKin}
            placeholder={"Next of Kin"}
            onChange={(e) => setNextOfKin(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.66985754"
            value={nextOfKinContact}
            placeholder={"Next of Kin Contacts"}
            onChange={(e) => setNextOfKinContact(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1981488507"
            value={medication}
            placeholder={"Medications"}
            onChange={(e) => setMedication(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.486109066"
            value={dnr}
            placeholder={"DNR (Do Not Resuscitate"}
            onChange={(e) => setDnr(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.1942624801"
            value={father}
            placeholder={"Father"}
            onChange={(e) => setFather(e.target.value)}
          />

          <input
            className=""
            type="text"
            name="entry.888867955"
            value={mother}
            placeholder={"Mother"}
            onChange={(e) => setMother(e.target.value)}
          />

          <inputs
            className=""
            type="text"
            name="entry.314012053"
            value={history}
            placeholder={"History"}
            onChange={(e) => setHistory(e.target.value)}
          />

          <div className="button">
            <RegisterButton type="submit">Register</RegisterButton>
          </div>

          <div className="submitted-status">{formSubmitted}</div>
          </form>
      </StyledForm>

    </StyledNewPatient>
  );
};

export default NewPatient;

const StyledNewPatient = styled.div``;