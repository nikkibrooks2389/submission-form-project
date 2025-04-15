import useForm from "../hooks/useForm"
import InputField from "./InputField/InputField";
import Button from "./Button/Button";

const SubmissionForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    return errors;
  };

  const onSubmit = (formData, { reset, done }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Submitted:", formData);
        done("Form submitted successfully.");
        reset();
        resolve();
      }, 1500);
    });
  };

  const {
    formData,
    errors,
    isLoading,
    status,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validate, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        hideLabel={true}
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        errorMessage={errors.name}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        errorMessage={errors.email}
      />

      <InputField
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        errorMessage={errors.message}
      />

      <Button
        type="submit"
        variant="primary"
        ariaLabel="Submit form"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Submit
      </Button>

      <div
        role="status"
        aria-live="polite"
        style={{
          marginTop: "1rem",
          fontWeight: "bold",
          color: status.includes("error") ? "red" : "green",
        }}
      >
        {status}
      </div>
    </form>
  );
};

export default SubmissionForm;
