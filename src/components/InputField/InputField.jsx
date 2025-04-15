import "./InputField.css";

const InputField = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  errorMessage = "",
  className = "",
  hideLabel = false,
  ...rest
}) => {
  const inputId = id || name;
  const describedBy = errorMessage ? `${inputId}-error` : undefined;

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={hideLabel ? "sr-only" : "input-label"}
        >
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-describedby={describedBy}
          className="input-element"
          {...rest}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-describedby={describedBy}
          className="input-element"
          {...rest}
        />
      )}

      {errorMessage && (
        <p id={`${inputId}-error`} className="input-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;