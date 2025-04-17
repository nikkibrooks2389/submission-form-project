import isRequired from "../rules/isRequired";
import isEmail from "../rules/isEmail";

const validateContactForm = (values) => {
  const errors = {};
  const email = values.email?.trim() || "";

  if (!isRequired(values.name)) {
    errors.name = "Name is required";
  }

  if (!isRequired(values.message)) {
    errors.message = "Message is required";
  }

  if (!isRequired(email)) {
    errors.email = "Email is required";
  } else if (!email.includes("@")) {
    errors.email = "Email must include an '@' symbol";
  } else if (!email.includes(".")) {
    errors.email = "Email must include a domain like '.com'";
  } else if (email.includes(" ")) {
    errors.email = "Email cannot contain spaces";
  } else if (!isEmail(email)) {
    errors.email = "Please enter a valid email format (e.g. name@example.com)";
  }

  return errors;
};

export default validateContactForm;
