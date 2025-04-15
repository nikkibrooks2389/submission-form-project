import "./Button.css";

const Button = ({
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  isLoading = false,
  className = "",
  ariaLabel,
  children,
  ...rest
}) => {
  const combinedClassName = `button ${variant} ${disabled ? "disabled" : ""} ${className}`;
  const buttonLabel = ariaLabel || (typeof children === "string" ? children : undefined);

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled || isLoading}
      aria-label={buttonLabel}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
