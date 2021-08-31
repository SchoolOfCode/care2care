const SelectPatientDropdown = () => {
  return (
    <div>
      <select onChange={(e) => setPatient(e.target.value)} value={patient}>
        <option value="" disabled defaultValue>
          Select Patient
        </option>
        {data.map((item, index) => (
          <option key={index} value={item.Timestamp}>
            {item.Patient}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPatientDropdown;
