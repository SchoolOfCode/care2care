export const GetInput = ({
  entry,
  value,
  label,
  onChange,
  className,
  readOnly,
  type
}) => {
  return (
    <input
      type={type || "text"}
      name={entry}
      value={value}
      placeholder={label}
      onChange={onChange}
      className={className}
      readOnly={readOnly}
    />
  );
};

export const GetSelect = ({ entry, value, onChange, options, label }) => {
  return (
    <select name={entry} value={value} onChange={onChange} required>
      <option value="" disabled defaultValue hidden>
        {label}
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export const GetSummary = ({ className, item }) => {
  return (
    <div className={className}>
      <p>{item || ""}</p>
    </div>
  );
};

export const GetInfo = ({ className, item, title }) => {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p>{item || "No Information Available"}</p>
    </div>
  );
};

export const GetSpacedInfo = ({ className, title, item, item2 }) => {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <span>
        <p>{item || "No Information Available"}</p>
        <p>{item2}</p>
      </span>
    </div>
  );
};

export const GetFilter = () => {
  return
}