const GetComments = ({ comments, setComments }) => {
  return (
    <input
      type="text"
      name="entry.1817980315"
      value={comments}
      placeholder={"Comments"}
      onChange={(e) => setComments(e.target.value)}
    />
  );
};

export default GetComments;
