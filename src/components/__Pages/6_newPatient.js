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
            className="hidden"
            type="text"
            name="entry.2035833587"
            value={newPatient.summary}
            readOnly
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

var FB_PUBLIC_LOAD_DATA_ = [
  null,
  [
    null,
    [
      [1970192419, "Summary", null, 1, [[2035833587, null, 0]]],
      [2000435674, "Patient", null, 0, [[1864384875, null, 0]]],
      [820582280, "Email", null, 0, [[1633351042, null, 0]]],
      [928497102, "Picture", "Picture link", 0, [[1523701268, null, 0]]],
      [
        1328726029,
        "DoB",
        "Date of Birth",
        9,
        [[1717570078, null, 0, null, null, null, null, [0, 1]]],
      ],
      [1097640489, "Diagnosis", null, 0, [[86638701, null, 0]]],
      [1160535687, "Allergies", null, 0, [[790819135, null, 0]]],
      [1554602583, "Address", null, 1, [[1789297383, null, 0]]],
      [1007245083, "NHS_Number", null, 0, [[365648476, null, 0]]],
      [1891525943, "GP", null, 0, [[1876095816, null, 0]]],
      [438911982, "NextOfKin", null, 0, [[1252200599, null, 0]]],
      [1381760410, "NoK_Contact", null, 0, [[66985754, null, 0]]],
      [1557618216, "Medication", null, 0, [[1981488507, null, 0]]],
      [
        1171968435,
        "DNR",
        "DNR (Do Not Resuscitate)",
        2,
        [
          [
            486109066,
            [
              ["Yes", null, null, null, 0],
              ["No", null, null, null, 0],
            ],
            0,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
      ],
      [328611162, "Father", null, 0, [[1942624801, null, 0]]],
      [227071202, "Mother", null, 0, [[888867955, null, 0]]],
      [1162693428, "History", null, 1, [[314012053, null, 0]]],
    ],
    ["", 1, 0, 1, 0],
    null,
    null,
    [0, 0],
    null,
    null,
    "Patients Data",
    51,
    [null, null, null, 2, 0],
    null,
    null,
    null,
    null,
    [2],
    [[1, 1, 1, 1, 1], 1],
  ],
  "/forms",
  "Patients Data",
  null,
  null,
  null,
  "0",
  null,
  0,
  0,
  null,
  "",
  0,
  "e/1FAIpQLSc2chQVmTjiLtPqEqZCCHjnwnCLl0cMkiqLp4wD40bjCMiMnA",
  0,
  '[{"data":{"value":[]},"keyPath":["syncMap","applicationFonts","6"],"state":{"hashValue":"00000000"}},{"data":{"value":[]},"keyPath":["syncMap","domainFonts","0"],"state":{"hashValue":"00000000"}},{"data":{"familyList":["Alegreya","Amatic SC","Bree Serif","Calibri","Cambria","Merriweather","Permanent Marker","Pinyon Script","Playfair Display","Proxima Nova","Roboto","Roboto Mono","Ultra","Varela Round"],"recentlyUsedFamilyList":[],"transitionedFamilyList":[],"hasTransitioned":true},"keyPath":["syncMap","preferences","docs-fonts"],"state":{"timestamp":1631129667588000}},{"data":{"blameLaunch":true,"saveIndicator":true,"meetInEditorsPromo":true},"keyPath":["syncMap","preferences","docs-global_promos","0"],"state":{"timestamp":1626187807248074}},{"data":{"value":0},"keyPath":["syncMap","preferences","docs-unsupported_feature_warning_callout_bubble_shown_count"],"state":{"timestamp":1631129667596000}},{"data":{"value":false},"keyPath":["syncMap","preferences","mae-show_addons_menu_promo"],"state":{"timestamp":1631129667599000}},{"data":{"value":false},"keyPath":["syncMap","preferences","docs-homescreen-aips"],"state":{"timestamp":1629930484200966}},{"data":{},"keyPath":["syncMap","preferences","docs-homescreen-asp","6"],"state":{"timestamp":1626187807248074}},{"data":{"value":0},"keyPath":["syncMap","preferences","docs-homescreen-ftbdct"],"state":{"timestamp":1629930484200966}},{"data":{"value":false},"keyPath":["syncMap","preferences","docs-homescreen-dbs"],"state":{"timestamp":1629930484200966}},{"data":{"value":false},"keyPath":["syncMap","preferences","docs-homescreen-ht"],"state":{"timestamp":1629930484200966}},{"data":{"value":true},"keyPath":["syncMap","preferences","docs-homescreen-wws"],"state":{"timestamp":1629930484200966}},{"data":{"value":0},"keyPath":["syncMap","preferences","docs-etg-lvt"],"state":{"timestamp":1631129667604000}},{"data":{"viewMode":1},"keyPath":["syncMap","preferences","docs-chrome","5"],"state":{"timestamp":1626191633406279}},{"data":{"viewMode":2},"keyPath":["syncMap","preferences","docs-chrome","1"],"state":{"timestamp":1626191633406279}},{"data":{"value":false},"keyPath":["syncMap","preferences","docs-screenreader"],"state":{"timestamp":1631129667608000}},{"data":{"value":false},"keyPath":["syncMap","preferences","docs-enable_braille"],"state":{"timestamp":1631129667608000}},{"data":{"value":false},"keyPath":["syncMap","preferences","docs-mute_collaborators"],"state":{"timestamp":1631129667608000}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_chooser"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_link_form_promo"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_whats_new"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-expand_dasher_options"],"state":{"timestamp":1629931783176245}},{"data":{"proto":"[]"},"keyPath":["syncMap","preferences","freebird-auto_create_sink"],"state":{"timestamp":1631129667611000}},{"data":{"proto":"[]"},"keyPath":["syncMap","preferences","freebird-ui_version"],"state":{"timestamp":1631129667613000}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-questions_required_by_default"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-collect_usernames_by_default"],"state":{"timestamp":1629931783176245}},{"data":{"value":0},"keyPath":["syncMap","preferences","freebird-default_point_value"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_assessments_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-autovalidate_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_qxq_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-show_braveheart_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_manual_grading_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_record_view_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-show_brain_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-has_seen_braveheart_theme_warning"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-show_custom_themes_toast"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-show_edu_bundle_18_toast"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_quizzes_intro"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-show_question_import_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":true},"keyPath":["syncMap","preferences","freebird-show_locked_mode_guided_help"],"state":{"timestamp":1629931783176245}},{"data":{"value":false},"keyPath":["syncMap","preferences","freebird-show_draft_responses_modal"],"state":{"timestamp":1629931783176245}}]',
  1,
  0,
];
