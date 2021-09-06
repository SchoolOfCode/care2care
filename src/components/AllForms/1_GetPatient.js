const GetPatient = ({ context }) => {
  return (
    <input
      type="text"
      name="entry.786976050"
      value={context.patient}
      placeholder="Patient not selected"
      readOnly
    />
  );
};

export default GetPatient;
