import styled from "styled-components";
import Form from "../Form";
import Title from "../StyledComponent/StyledTitle";
import { useEffect, useState } from "react";
import { GetInput, GetSelect } from "../GetInput/index.js";
import { FormStatus } from "../StyledComponent/StyledStatus";
import { RowFlexCenter } from "../StyledComponent/StyledDisplay";

const NewPatient = ({ children }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState("");
  const [patient, setPatient] = useState("");
  const [summary, setSummary] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [DoB, setDoB] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [allergies, setAllergies] = useState("");
  const [address, setAddress] = useState("");
  const [NHS_Number, setNHS_Number] = useState("");
  const [GP, setGP] = useState("");
  const [NextOfKin, setNextOfKin] = useState("");
  const [NoK_Contact, setNoK_Contact] = useState("");
  const [medication, setMedication] = useState("");
  const [DNR, setDNR] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [history, setHistory] = useState("");

  const validateComments = () => {
    return !patient ? alert("Input can't be blank") : true;
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
    <StyledNewPatient>
      <Title text="Add New Patient" />

      <Form
        FORM_ACTION="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc2chQVmTjiLtPqEqZCCHjnwnCLl0cMkiqLp4wD40bjCMiMnA/formResponse"
        validateForm={validateForm}
        formSubmitted={formSubmitted}
      >
        <h3>Personal Data</h3>
        <div className="divide">
          <GetInput
            entry={"entry.1864384875"}
            value={patient}
            label={"Enter name"}
            onChange={(e) => setPatient(e.target.value)}
          />

          <GetInput
            entry={"entry.1717570078"}
            value={DoB}
            label={"Date of Birth"}
            type={"date"}
            onChange={(e) => setDoB(e.target.value)}
          />
        </div>

        <GetInput
          entry={"entry.2035833587"}
          value={summary}
          label={"Short summary of the patient"}
          onChange={(e) => setSummary(e.target.value)}
        />

        <div className="divide">
          <GetInput
            entry={"entry.1633351042"}
            value={email}
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <GetInput
            entry={"entry.1789297383"}
            value={address}
            label={"Address"}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <GetInput
          entry={"entry.1523701268"}
          value={picture}
          label={"Picture URL"}
          onChange={(e) => setPicture(e.target.value)}
        />

        <h3>Medical Information</h3>

        <div className="divide">
          <GetInput
            entry={"entry.86638701"}
            value={diagnosis}
            label={"Diagnosis"}
            onChange={(e) => setDiagnosis(e.target.value)}
          />

          <GetInput
            entry={"entry.1981488507"}
            value={medication}
            label={"Medication"}
            onChange={(e) => setMedication(e.target.value)}
          />
        </div>

        <GetInput
          entry={"entry.790819135"}
          value={allergies}
          label={"Allergies"}
          onChange={(e) => setAllergies(e.target.value)}
        />

        <GetSelect
          entry={"entry.486109066"}
          value={DNR}
          label={"DNR"}
          onChange={(e) => setDNR(e.target.value)}
          options={["Yes", "No"]}
        />

        <div className="divide">
          <GetInput
            entry={"entry.1876095816"}
            value={GP}
            label={"GP"}
            onChange={(e) => setGP(e.target.value)}
          />
          <GetInput
            entry={"entry.365648476"}
            value={NHS_Number}
            label={"NHS Number"}
            onChange={(e) => setNHS_Number(e.target.value)}
          />
        </div>

        <h3>In case of emergency</h3>
        <div className="divide">
          <GetInput
            entry={"entry.1252200599"}
            value={NextOfKin}
            label={"Next Of Kin"}
            onChange={(e) => setNextOfKin(e.target.value)}
          />
          <GetInput
            entry={"entry.66985754"}
            value={NoK_Contact}
            label={"Contact"}
            onChange={(e) => setNoK_Contact(e.target.value)}
          />
        </div>

        <div className="divide">
          <GetInput
            entry={"entry.1942624801"}
            value={father}
            label={"Father's name"}
            onChange={(e) => setFather(e.target.value)}
          />
          <GetInput
            entry={"entry.888867955"}
            value={mother}
            label={"Mother's name"}
            onChange={(e) => setMother(e.target.value)}
          />
        </div>

        <h3>More Information</h3>
        <GetInput
          entry={"entry.314012053"}
          value={history}
          label={"History"}
          onChange={(e) => setHistory(e.target.value)}
        />
      </Form>
      <div
        className="clear"
        onClick={() => {
          setSubmitted("");
          setFormSubmitted("");
          setPatient("");
          setSummary("");
          setEmail("");
          setPicture("");
          setDoB("");
          setDiagnosis("");
          setAllergies("");
          setAddress("");
          setNHS_Number("");
          setGP("");
          setNextOfKin("");
          setNoK_Contact("");
          setMedication("");
          setDNR("");
          setFather("");
          setMother("");
          setHistory("");
        }}
      >
        Clear Form
      </div>
    </StyledNewPatient>
  );
};

export default NewPatient;

const StyledNewPatient = styled.div`
  margin-bottom: 50px;

  h3 {
    text-align: left;
    font-size: 20px;
    margin: 20px 0;
    border-bottom: 1px solid ${(props) => props.theme.accent1};
    color: ${(props) => props.theme.accent1};

    :first-child {
      margin-top: 0;
    }
  }

  .divide {
    ${RowFlexCenter}

    input {
      width: 45vw;
      height: 35px;

      :first-child {
        margin-right: 5px;
      }
    }
  }

  .clear {
    margin-top: 20px;
    text-align: center;
    color: rgb(255, 85, 85);
    font-weight: 800;
  }
`;
