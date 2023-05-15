export const InputElement = ({ labelText, type, name, value, onChange }) => {
  return (
    <label>
      {labelText}
      <input
        type={type}
        name={name}
        value={value}
        minLength="5"
        onChange={onChange}
      />
    </label>
  );
};
