import useForm from "../hooks/useForm"
import InputField from "./InputField/InputField";
import Button from "./Button/Button";
import validateContactForm from "../utils/validation/schemas/validateContactForm";


const SubmissionForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
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
  } = useForm(initialValues, validateContactForm, onSubmit);

  return (
    <form onSubmit={handleSubmit} noValidate>
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
