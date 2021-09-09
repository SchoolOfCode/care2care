const GetJob = ({ job, setJob }) => {
  return (
    <select
      name="entry.31137095"
      onChange={(e) => setJob(e.target.value)}
      value={job}
      required
    >
      <option value="" disabled defaultValue hidden>
        Job Title [Staff]
      </option>
      <option value="Care Assistant">Care Assistant</option>
      <option value="Senior Care Assistant">Senior Care Assistant</option>
      <option value="Manager">Manager</option>
    </select>
  );
};

export default GetJob;
