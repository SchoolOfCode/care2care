//TO-DO ====================================================================================================================
//add a button/link that takes user to check the records of that user
//add a button/link that takes user to add new record
//when user is taken to the other screen, the dropdown is gonna be pre-set to whatever that patient is

import PatientSheets from "../components/PatientsSheets";

const PatientProfile = () => {
  return (
    <>
      <h1>PATIENT PROFILE</h1>
      <PatientSheets />
    </>
  );
};

export default PatientProfile;
