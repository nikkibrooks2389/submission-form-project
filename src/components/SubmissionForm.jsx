import { useState, useEffect } from "react";
import InputField from "./InputField/InputField";
import Button from "./Button/Button";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmissionStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = handleValidation();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmissionStatus("There were errors in your submission.");
      return;
    }

    setIsLoading(true);
    setSubmissionStatus(""); // Clear previous status

    // Simulate async submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmissionStatus("Form submitted successfully.");
      // Optional: clear form
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  useEffect(() => {
    console.log("formData change", formData);
  }, [formData]);

  const handleValidation = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        hideLabel={true}
        id="name"
        name="name"
        value={formData.name}
        onChange={handleFormData}
        placeholder="Name"
        errorMessage={errors.name}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormData}
        placeholder="Email"
        errorMessage={errors.email}
      />

      <InputField
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleFormData}
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
        style={{ marginTop: "1rem", fontWeight: "bold", color: submissionStatus.includes("error") ? "red" : "green" }}
      >
        {submissionStatus}
      </div>
    </form>
  );
};

export default SubmissionForm;
