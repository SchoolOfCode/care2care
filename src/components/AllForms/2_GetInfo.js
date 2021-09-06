const GetInfo = ({ className, item, title }) => {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p>{item || "No Information Available"}</p>
    </div>
  );
};

export default GetInfo;
