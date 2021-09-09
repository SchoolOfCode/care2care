const GetRecords = ({ records, setRecords }) => {
  return (
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
      <option value="Incident and/or Accident">Incident and/or Accident</option>
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
  );
};

export default GetRecords;
