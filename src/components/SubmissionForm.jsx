import { useState, useEffect } from "react";
import InputField from "./InputField/InputField";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();
    setErrors(validationErrors);
    console.log(formData);
  };

  useEffect(() => {
    console.log("formData change", formData);
  }, [formData]);

  const handleValidation = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "name is required";
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
