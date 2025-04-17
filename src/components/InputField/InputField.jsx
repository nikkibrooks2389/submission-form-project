import React from "react";
import "./InputField.css";

const InputField = React.forwardRef(({
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
}, ref) => {
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
          ref={ref}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-describedby={describedBy}
          className="input-element"
          aria-invalid={!!errorMessage}
          {...rest}
        />
      ) : (
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-describedby={describedBy}
          className="input-element"
          aria-invalid={!!errorMessage}
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
});

export default InputField;