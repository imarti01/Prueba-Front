import './InputElement.scss';

export const InputElement = ({ labelText, type, name, value, onChange }) => {
  return (
    <label className="input-element">
      {labelText}:
      <input
        className="input-element__input"
        type={type}
        name={name}
        value={value}
        minLength="5"
        onChange={onChange}
      />
    </label>
  );
};
